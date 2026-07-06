function TaskItem({
    todo,
    toggleStatus,
    editTodo,
    deleteTodo,
  }) {
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleStatus(todo)}
        />
  
        <span
          style={{
            textDecoration: todo.completed
              ? "line-through"
              : "none",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          {todo.title}
        </span>
  
        <button onClick={() => editTodo(todo)}>
          ✏️
        </button>
  
        <button
          onClick={() => deleteTodo(todo._id)}
        >
          ❌
        </button>
      </li>
    );
  }
  
  export default TaskItem;