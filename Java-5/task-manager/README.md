# Task Manager - Dockerized Full-Stack Application

A simple task management application built with Node.js/Express, MongoDB, and vanilla JavaScript. The entire application is containerized with Docker and can be launched with a single Docker Compose command.

## Tech Stack

- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Frontend**: HTML, CSS, and JavaScript (vanilla)
- **Containerization**: Docker with Docker Compose

## Features

- View all tasks
- Add a new task with title and description
- Delete tasks
- Persistence with MongoDB

## Project Structure

```
task-manager/
├── backend/              # Express API
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── Dockerfile        # Backend container setup
│   └── server.js         # Main application file
├── frontend/             # Static web frontend
│   ├── css/              # Stylesheets
│   ├── js/               # Client-side JavaScript
│   ├── Dockerfile        # Frontend container setup
│   └── index.html        # Main HTML page
└── docker-compose.yml    # Docker Compose configuration
```

## Running the Application

### Prerequisites

- Docker
- Docker Compose

### Steps to Run

1. Clone this repository
   ```
   git clone <repository-url>
   cd task-manager
   ```

2. Start the application with Docker Compose
   ```
   docker compose up
   ```

3. Access the application
   - Frontend: http://localhost:8080
   - Backend API: http://localhost:3000

### Stopping the Application

```
docker compose down
```

To completely remove all data (including the MongoDB volume):
```
docker compose down -v
```

## API Endpoints

- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `DELETE /api/tasks/:id` - Delete a task by ID

## Screenshot

![Task Manager App Screenshot](screenshot.png)
*Add a screenshot of your running application here*