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
    const { title } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({ message: "Title is required" });
    }

    const savedTodo = await todoService.createTodo(title);
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ message: "Failed to create todo" });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await todoService.deleteTodo(req.params.id);
    res.status(200).json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete todo" });
  }
};

exports.updateTodo = async (req, res) => {
  try {
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
    res.status(500).json({ message: "Failed to update todo" });
  }
};