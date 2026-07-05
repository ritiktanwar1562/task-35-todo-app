# Todo App

## Project Overview

I made this project to understand full-stack web development using the MERN stack. The application allows users to create, view, update, and delete todos. The main goal of this project was to learn how frontend and backend communicate through REST APIs and how MongoDB stores data.

---

## Technologies Used

### Frontend
- React.js
- CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Development Tools
- VS Code
- Git and GitHub
- npm

---

## Features

- Add a new todo
- View all todos
- Update todo title
- Mark todos as completed
- Delete todos
- Responsive user interface
- MongoDB database integration

---

## Folder Structure

todo-app/
│
├── frontend/
│   ├── src/
│   └── public/
│
├── backend/
│   ├── controllers/
│   ├── services/
│   ├── models/
│   ├── routes/
│   └── .env.example
│
└── README.md
---

## Backend Setup

Move to backend folder:

cd backend
Install dependencies:

npm install
Start the backend server:

npm start
Backend runs on:

http://localhost:5000
---

## Frontend Setup

Move to frontend folder:

cd frontend
Install dependencies:

npm install
Run the React application:

npm start
Frontend runs on:

http://localhost:3000
---

## Environment Variables

Create a .env file inside the backend folder.

Example:

PORT=5000
MONGO_URI=your_mongodb_connection_string
A sample file is also provided as .env.example.

---

## API Endpoints

### Get All Todos

GET /api/todos
### Create Todo

POST /api/todos
Request Body:

{
  "title": "Learn Express"
}
### Update Todo

PUT /api/todos/:id
Request Body:

{
  "title": "Learn Express Updated",
  "completed": true
}
### Delete Todo

DELETE /api/todos/:id
---

## Improvements Made After Feedback

The following changes were implemented after receiving mentor feedback:

### Fixed Update Functionality

Initially, only the completed status was being updated.

Now both fields are updated correctly:

- title
- completed

### Added Error Handling

Error handling was added to the service layer using try-catch blocks.

Validation was also added to ensure that empty titles cannot be created.

### Added Environment Example File

A .env.example file was added to help other users set up the project easily.

### Re-tested the Application

The application was run again after implementing all fixes to verify that the changes work correctly.

---

## What I Learned

Through this project, I learned:

- Creating REST APIs using Express.js
- Connecting Node.js with MongoDB using Mongoose
- Managing React state with hooks
- Making API calls using Axios
- Organizing code into controllers, services, models, and routes
- Using Git and GitHub for version control
- Handling errors and validations properly
- Working with environment variables

---

## Challenges Faced

Some challenges I faced during this project were:

- Understanding communication between frontend and backend.
- Fixing the update functionality so that both title and completion status update correctly.
- Implementing proper error handling in the service layer.
- Managing project structure and folder organization.
- Testing APIs in an older development environment.

---

## Development Environment

The project was developed on an older Windows laptop using an older version of VS Code.

Because of compatibility limitations with newer versions of Postman and Thunder Client, API verification was performed through local execution and manual testing after implementing the required fixes.

Verified locally:

- MongoDB Connected ✅
- Backend Server Running on Port 5000 ✅
- Frontend Compiled Successfully on Port 3000 ✅
- Create Todo ✅
- Read Todos ✅
- Update Todo Title and Status ✅
- Delete Todo ✅

---

## Conclusion
This project helped me understand the complete flow of a full-stack application, from building APIs and connecting databases to creating a user interface with React. It also taught me the importance of code organization, validation, and error handling in real-world applications.
