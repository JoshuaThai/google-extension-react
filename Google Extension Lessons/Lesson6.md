# Lesson 6 — Where JavaScript can run (VERY IMPORTANT)

This is where most confusion starts. We’re going to make it simple.

There are <b>three main places</b> your JS can run:

## 1️⃣ Popup JavaScript

📍 <b>Runs inside the popup HTML</b>

- Has DOM access

- Can use some Chrome APIs

- Starts when popup opens

- Dies when popup closes

Think: <b>UI logic only</b>

## 2️⃣ Background (Service Worker)

📍 <b>Runs in the background (no UI)</b>

- No DOM

- Event-based

- Can use most Chrome APIs

- Wakes up → does work → sleeps

Think: <b>brain / coordinator</b>

## 3️⃣ Content Script

📍 <b>Runs inside a website</b>

- Can read/modify page DOM

- Limited Chrome APIs

- Cannot directly access privileged APIs

- Communicates via messaging

Think: <b>page interaction</b>
