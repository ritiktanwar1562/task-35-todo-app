const Todo = require("../models/Todo");

exports.getTodos = async () => {
  return await Todo.find();
};

exports.createTodo = async (title) => {
  return await Todo.create({ title });
};

exports.updateTodo = async (id) => {
  return await Todo.findByIdAndUpdate(
    id,
    { completed: true },
    { new: true }
  );
};

exports.deleteTodo = async (id) => {
  return await Todo.findByIdAndDelete(id);
};