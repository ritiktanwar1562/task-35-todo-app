const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

exports.addTodo = async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
  });

  const savedTodo = await todo.save();
  res.json(savedTodo);
};

exports.deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
};

exports.updateTodo = async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedTodo);
};