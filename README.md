# MERN Todo App

A full-stack Todo application built using the MERN Stack. This project allows users to create, view, update, and delete todos with data stored in MongoDB.

---

## Features

- Add new todo
- View all todos
- Update existing todo
- Delete todo
- REST API integration
- MongoDB database
- Axios for API requests
- Backend validation
- Error handling
- Loading indicator

---

## Tech Stack

### Frontend
- React.js
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Project Structure

backend/
├── controllers/
├── services/
├── models/
├── routes/
├── .env.example
└── server.js

frontend/
├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
---

## Improvements Made

This project was updated based on mentor feedback.

### Backend
- Added Service Layer to separate business logic from controllers.
- Added try-catch blocks for proper error handling.
- Added input validation for todo title.
- Returned proper HTTP status codes.

### Frontend
- Replaced Fetch API with Axios.
- Added loading indicator.
- Added frontend error handling for failed API requests.

### Documentation
- Added .env.example.
- Completed README with setup instructions.
- Documented API endpoints.

---

## Installation

### Clone Repository

git clone <your-github-repository-link>
### Backend Setup

cd backend
npm install
npm start
### Frontend Setup

cd frontend
npm install
npm start
---

## Environment Variables

Create a .env file inside the backend folder.

Example:

MONGO_URI=your_mongodb_connection_string
PORT=5000
---

## API Endpoints

### Get All Todos

GET /api/todos
### Create Todo

POST /api/todos
### Update Todo

PUT /api/todos/:id
### Delete Todo

DELETE /api/todos/:id
---

## API Testing

The application was tested locally after implementing the required fixes.

Verified endpoints:
- GET Todo ✅
- POST Todo ✅
- PUT Todo ✅
- DELETE Todo ✅

Backend:
- MongoDB Connected ✅
- Server running on port 5000 ✅

Frontend:
- Compiled successfully on localhost:3000 ✅

Note: API verification was performed locally after fixing the update functionality and adding error handling.


---

## Future Improvements

- User Authentication
- Search Todos
- Filter Completed/Pending Todos
- Responsive UI

---

## Author

Ritik Tanwar

GitHub: https://github.com/ritiktanwar1562
