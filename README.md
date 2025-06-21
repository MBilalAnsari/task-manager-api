# Task Manager API (Junior Backend Test)

A simple Express.js-based task manager API built for junior backend testing purposes. Tasks are stored in-memory (no database used).

---

## Features

- Create a task with title and optional description
- Retrieve all tasks
- In-memory task storage (array-based)
- Input validation using `express-validator`
- Modular and clean code structure

---

## Tech Stack

- Node.js
- Express.js
- express-validator

---

## Folder Structure

```
task-manager-api/
├── controllers/          # Handles business logic
│   └── taskController.js
├── routes/               # Defines API endpoints
│   └── taskRoutes.js
├── validations/          # Input validation logic
│   └── taskValidation.js
├── app.js                # App configuration
└── server.js             # Entry point to run server
```
