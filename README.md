# Todo App

## Project Overview

This is a full-stack Todo application developed using the MERN stack. The application allows users to create, view, update and delete todos. The main objective of this project was to understand how React communicates with a Node.js and Express backend using REST APIs and how MongoDB stores application data.

---

## Technologies Used

### Frontend
- React.js
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Development Tools
- Visual Studio Code
- Git & GitHub
- Hoppscotch
- Browser Developer Tools
- npm

---

## Features

- Add a new todo
- View all todos
- Update todo title
- Mark todo as completed
- Delete todo
- Search todos
- Filter completed and pending todos
- Responsive user interface
- MongoDB database integration

---

## Folder Structure

todo-app/
│
├── frontend/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── .env.example
│
└── README.md
---

## Backend Setup

Move to the backend folder:

cd backend
Install dependencies:

npm install
Run the backend server:

npm start
Backend runs at:

http://localhost:5000
---

## Frontend Setup

Move to the frontend folder:

cd frontend
Install dependencies:

npm install
Start the React application:

npm start
Frontend runs at:

http://localhost:3000
---

## Environment Variables

Create a .env file inside the backend folder.

Example:

PORT=5000
MONGO_URI=your_mongodb_connection_string
A sample environment file .env.example is included in the backend folder for reference.

---

## API Endpoints

### GET

GET /api/todos
Fetch all todos.

---

### POST

POST /api/todos
Request Body:

{
  "title": "Learn Express"
}
---

### PUT

PUT /api/todos/:id
Request Body:

{
  "title": "Learn Express Updated",
  "completed": true
}
---

### DELETE

DELETE /api/todos/:id
Deletes a todo by ID.

---

## API Testing

After implementing the required changes, the APIs were tested successfully.

Testing tools used:

- Hoppscotch
- Browser Developer Tools (Network Tab)

Verified APIs:

- ✅ GET /api/todos
- ✅ POST /api/todos
- ✅ PUT /api/todos/:id
- ✅ DELETE /api/todos/:id

API testing screenshots have been included with the project submission.

---

## Improvements Made After Feedback

The following improvements were implemented after mentor feedback:

- Added .env.example file in the backend folder.
- Added Axios request and response interceptors for centralized API handling.
- Added centralized frontend API error handling.
- Added MongoDB ObjectId validation before database queries.
- Removed duplicate validation logic between controller and service layer.
- Fixed update functionality for both title and completed status.
- Updated README with setup instructions and API documentation.
- Added API testing proof for GET, POST, PUT and DELETE requests.

---

## What I Learned

Through this project I learned:

- Building REST APIs using Express.js
- Connecting MongoDB with Mongoose
- React state management using Hooks
- Using Axios for API requests
- Creating reusable React components
- Handling errors properly
- Organizing backend into controllers, services, models and routes
- Using Git and GitHub for version control
- API testing and debugging

---

## Challenges Faced

Some challenges during development were:

- Connecting frontend and backend correctly
- Configuring MongoDB Atlas
- Fixing update functionality
- Implementing proper validation and error handling
- Testing APIs on an older development environment

---

## Development Environment

The project was developed using:

- Windows
- Visual Studio Code
- Node.js
- React.js
- Express.js
- MongoDB Atlas

API verification was performed using:

- Hoppscotch
- Browser Developer Tools (Network Tab)

Verified Successfully:

- ✅ MongoDB Connected
- ✅ Backend Running
- ✅ Frontend Running
- ✅ GET API
- ✅ POST API
- ✅ PUT API
- ✅ DELETE API
- 
Conclusion:
This project helped me understand the complete MERN stack workflow, including frontend development, backend API development, MongoDB integration, validation, error handling, API testing, and project organization. It improved my understanding of full-stack application development and REST APIs.
---

## Conclusion
