import TaskItem from "./TaskItem";

function TaskList({
  filteredTodos,
  toggleStatus,
  editTodo,
  deleteTodo,
}) {
  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TaskItem
          key={todo._id}
          todo={todo}
          toggleStatus={toggleStatus}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TaskList;