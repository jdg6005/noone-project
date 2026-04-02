import re
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

_analyzer = SentimentIntensityAnalyzer()


def AnalyzeWords(text):
    """Return compound sentiment score for a block of text, range -1.0 to 1.0."""
    score = _analyzer.polarity_scores(text.lower().strip())
    return round(score["compound"], 4)


def score_words(text):
    """
    Split text into individual words, score each one.
    Returns a list of (word, score) tuples.
    """
    results = []
    for word in re.split(r"\s+", text.strip()):
        cleaned = re.sub(r"[^\w'-]", "", word)
        if not cleaned:
            continue
        score = _analyzer.polarity_scores(cleaned.lower())
        results.append((cleaned, round(score["compound"], 4)))
    return results
