function TaskForm({
    text,
    setText,
    handleSubmit,
    editId,
  }) {
    return (
      <div className="inputBox">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter todo"
        />
  
        <button onClick={handleSubmit}>
          {editId ? "Update" : "Add"}
        </button>
      </div>
    );
  }
  
  export default TaskForm;