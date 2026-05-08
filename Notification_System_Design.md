# Stage 1 - Campus Notification Microservice

## Overview

This project implements a notification prioritization microservice for a campus notification system.

The application fetches notifications from the provided protected API, calculates notification priority based on notification type and recency, and returns the top 10 highest-priority notifications.

---

## Tech Stack

- Node.js
- Express.js
- Axios
- Nodemon
- dotenv

---

## Project Structure

campus-notification-system/
│
├── middleware/
│ └── logger.js
│
├── routes/
│ └── notificationRoutes.js
│
├── services/
│ └── notificationService.js
│
├── .env
├── .gitignore
├── app.js
└── Notification_System_Design.md

---

## Logging Middleware

A reusable logging middleware was implemented to track:

- Incoming requests
- Request URLs
- HTTP methods
- Response status codes
- API execution time

This middleware improves debugging, observability, and monitoring.

---

## Priority Calculation Logic

Priority is determined using:

1. Notification Type Weight
2. Notification Recency

Weights used:

- Placement → 3
- Result → 2
- Event → 1

A priority score is calculated using:

priorityScore = typeWeight + timestamp value

Notifications are sorted in descending order of priority score.

The top 10 notifications are returned.

---

## API Integration

Notifications are fetched from the protected AffordMed API using Bearer Token Authentication.

Authorization token is securely stored using environment variables.

---

## Error Handling

The application handles:

- API request failures
- Invalid authorization tokens
- Internal server errors

using try-catch blocks and proper HTTP status responses.

---

## Scalability

The application follows a modular architecture:

- Middleware Layer
- Service Layer
- Route Layer

This structure makes the application scalable and maintainable for future stages.

---

## Output

The API endpoint:

http://localhost:3000/notifications

returns the top 10 prioritized notifications.