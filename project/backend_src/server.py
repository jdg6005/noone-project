import re
import sqlite3
import uuid
from datetime import datetime, timezone
from pathlib import Path

from flask import Flask, jsonify, request
from flask_cors import CORS
from analysis import AnalyzeWords

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

DB_PATH = Path(__file__).parent / "data.db"


def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    return conn


def init_db():
    with get_db() as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS submissions (
                id          INTEGER PRIMARY KEY AUTOINCREMENT,
                session_id  TEXT    NOT NULL,
                question_id TEXT    NOT NULL,
                answer      TEXT    NOT NULL,
                sentiment   INTEGER NOT NULL,
                timestamp   TEXT    NOT NULL,
                created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        """)


# POST /api/answers — single answer (used by apiClient.submitAnswer)
@app.post("/api/answers")
def post_answer():
    data = request.get_json(silent=True) or {}
    question_id = data.get("questionId")
    answer = data.get("answer")

    if not question_id or answer is None:
        return jsonify({"error": "questionId and answer are required"}), 400

    sentiment = AnalyzeWords(answer)

    ts = data.get("timestamp") or datetime.now(timezone.utc).isoformat()
    session_id = data.get("sessionId") or str(uuid.uuid4())

    with get_db() as conn:
        cur = conn.execute(
            "INSERT INTO submissions (session_id, question_id, answer, sentiment, timestamp) VALUES (?, ?, ?, ?, ?)",
            (session_id, question_id, str(answer), sentiment, ts),
        )

    return jsonify({"id": cur.lastrowid}), 201


# POST /api/answers/batch — all answers at once (one session)
@app.post("/api/answers/batch")
def post_answers_batch():
    data = request.get_json(silent=True) or {}
    answers = data.get("answers")


    if not answers or not isinstance(answers, dict):
        return jsonify({"error": "answers object is required"}), 400

    session_id = str(uuid.uuid4())
    ts = data.get("timestamp") or datetime.now(timezone.utc).isoformat()

    with get_db() as conn:
        conn.executemany(
            "INSERT INTO submissions (session_id, question_id, answer, sentiment, timestamp) VALUES (?, ?, ?, ?, ?)",
            [(session_id, qid, str(ans), AnalyzeWords(ans), ts) for qid, ans in answers.items()],
        )

    return jsonify({"session_id": session_id}), 201


# GET /api/answers — all stored answers
@app.get("/api/answers")
def get_answers():
    with get_db() as conn:
        rows = conn.execute(
            "SELECT * FROM submissions ORDER BY created_at DESC"
        ).fetchall()
    return jsonify([dict(r) for r in rows])


# GET /api/answers/<session_id> — one session's answers
@app.get("/api/answers/<session_id>")
def get_session(session_id):
    with get_db() as conn:
        rows = conn.execute(
            "SELECT * FROM submissions WHERE session_id = ? ORDER BY question_id",
            (session_id,),
        ).fetchall()
    return jsonify([dict(r) for r in rows])


# GET /api/words — all words from answers in Unreal Engine friendly format
# Returns { "words": ["word1", "word2", ...] } — root object required by UE's JSON parser
@app.get("/api/words")
def get_words():
    with get_db() as conn:
        rows = conn.execute("SELECT answer FROM submissions").fetchall()

    words = []
    for row in rows:
        for word in re.split(r"\s+", row["answer"].strip()):
            cleaned = re.sub(r"[^\w'-]", "", word)
            if cleaned:
                words.append(cleaned)

    return jsonify({"words": words})


if __name__ == "__main__":
    init_db()
    print(f"Database at {DB_PATH}")
    app.run(port=3000, debug=True)
