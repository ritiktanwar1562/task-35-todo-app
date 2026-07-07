const mongoose = require("mongoose");
const todoService = require("../services/todoService");

exports.getTodos = async (req, res) => {
  try {
    const todos = await todoService.getTodos();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch todos" });
  }
};

exports.addTodo = async (req, res) => {
  try {
    
    console.log("Body:", req.body);
console.log("Content-Type:", req.headers["content-type"]);

    const { title } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({ message: "Title is required" });
    }

    const savedTodo = await todoService.createTodo(title);
    res.status(201).json(savedTodo);

  } catch (error) {
    console.error(error);
  
    res.status(500).json({
      message: "Failed to create todo",
      error: error.message,
    });
  }
};
exports.deleteTodo = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid Todo ID" });
    }

    await todoService.deleteTodo(req.params.id);
    res.status(200).json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete todo" });
  }
};

exports.updateTodo = async (req, res) => {
  try {

    console.log("Body:", req.body);
console.log("Content-Type:", req.headers["content-type"]);

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid Todo ID" });
    }


    const { title, completed } = req.body;

const updatedTodo = await todoService.updateTodo(
  req.params.id,
  title,
  completed
);

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error(error);
  
    res.status(500).json({
      message: "Failed to update todo",
      error: error.message,
    });
  }
};