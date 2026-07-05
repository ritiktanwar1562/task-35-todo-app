const Todo = require("../models/Todo");

// Get all todos
exports.getTodos = async () => {
  try {
    return await Todo.find();
  } catch (error) {
    throw new Error("Unable to fetch todos");
  }
};

// Create a new todo
exports.createTodo = async (title) => {
  try {
    if (!title || title.trim() === "") {
      throw new Error("Title is required");
    }

    return await Todo.create({
      title,
      completed: false,
    });
  } catch (error) {
    throw error;
  }
};

// Update todo
exports.updateTodo = async (id, title, completed) => {
  try {
    const updatedData = {};

    if (title !== undefined) {
      updatedData.title = title;
    }

    if (completed !== undefined) {
      updatedData.completed = completed;
    }

    return await Todo.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );
  } catch (error) {
    throw new Error("Unable to update todo");
  }
};

// Delete todo
exports.deleteTodo = async (id) => {
  try {
    return await Todo.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Unable to delete todo");
  }
};