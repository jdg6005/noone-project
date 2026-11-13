# SAPWOOD — Interactive Music Experience

**Course Project — CSCI 518 / PHAP 368: Interactive Music Experiences | Rochester Institute of Technology**

SAPWOOD is an interactive music experience developed as part of an interdisciplinary course bringing together computer science and art students to collaborate with local professional musicians. The semester-long project combined software development, visual design, and music to create an immersive, audience-driven experience.

Developed in collaboration with musician Adrianna Noone and centered around her song **“Words for War,”** SAPWOOD invited participants to reflect on communication, conflict, and connection through a series of one-word responses. These responses were processed and incorporated into an Unreal Engine visualization, connecting audience participation with a shared visual experience.

## Features

- **Guided reflection:** A seven-step questionnaire prompted participants to respond to questions about emotions, communication, and music using a single word.
- **Music playback:** A custom audio player provided play/pause, seeking, playback time, and volume controls.
- **Sentiment analysis:** A Python backend assigned sentiment scores to submitted words.
- **Response storage:** A Flask API recorded answers, question identifiers, sentiment scores, and timestamps in SQLite.
- **Unreal Engine integration:** The backend transmitted words and sentiment scores over Open Sound Control (OSC) to an Unreal Engine visualization.
- **Animated interface:** The React frontend featured an animated background, page transitions, and an interactive questionnaire.
- **Artist information:** A closing page provided information about the song and links to the musician's work.

## Technologies Used

| Component | Technologies |
| --- | --- |
| Frontend | React, JavaScript, Vite, React Router, CSS |
| Visual Effects | Motion, OGL / WebGL |
| Backend | Python, Flask, Flask-CORS |
| Sentiment Analysis | VADER Sentiment |
| Data Storage | SQLite |
| Visualization Communication | Open Sound Control (OSC), Python OSC |
| External Visualization | Unreal Engine |

## Project Structure

```text
noone-project/
└── project/
    ├── src/                 # React pages, components, styles, and API client
    ├── public/              # Music and other static assets
    ├── backend_src/
    │   ├── analysis.py      # Sentiment scoring
    │   ├── server.py        # Flask API, SQLite storage, and OSC messages
    │   └── requirements.txt # Python dependencies
    ├── package.json         # Frontend dependencies and scripts
    └── vite.config.js       # Vite development server and API proxy
```

## How It Works

1. **Music and reflection:** Participants listened to “Words for War” and progressed through a series of questions.
2. **Response collection:** Each one-word response was submitted through the React frontend to the Flask backend.
3. **Sentiment analysis:** The backend calculated a sentiment score for each response.
4. **Data storage:** Responses and their associated information were stored in a SQLite database.
5. **Interactive visualization:** The backend transmitted the responses and sentiment scores to Unreal Engine via OSC, allowing audience input to influence the visual experience.

## Project Status

This repository contains the React frontend and Python backend developed for SAPWOOD. The original project also included an Unreal Engine visualization that received participant responses through OSC, but that component is not included in this repository.

The repository is maintained as an archive of the collaborative coursework and implementation rather than as a standalone, fully deployable application.

## Team and Credits

SAPWOOD was developed through collaboration between computer science and art students as part of RIT's Interactive Music Experiences course.

| Role | Contributor |
| --- | --- |
| Frontend Designer | Carlo Clerigo |
| Frontend and Video Editor | Jaidan Giglio |
| Backend Designer | Johnathan Liu |
| Environmental Artist | Tiffany Vu |
| Material Designer | Jynn Lee |
| Technical Artist | Tommy Desjardins |
| Musical Artist | Adrianna Noone |

**Music:** “Words for War” by Adrianna Noone

[Artist Website](https://adriannanoone.com/) · [Live Performance](https://www.youtube.com/watch?v=_XjuLh3H3FM)
