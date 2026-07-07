import { useEffect, useState } from "react";
import api from "./services/api";
import TaskForm from "./components/TaskForm";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import TaskList from "./components/TaskList";

const BASE_URL = "/todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const fetchTodos = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get(BASE_URL);
      setTodos(response.data);
    } catch (err) {
      setError("Failed to fetch todos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async () => {
    if (!text.trim()) return;

    try {
      setLoading(true);
      setError("");

      if (editId) {
        await api.put(`${BASE_URL}/${editId}`, {
          title: text,
        });
        setEditId(null);
      } else {
        await api.post(BASE_URL, {
          title: text,
        });
      }

      setText("");
      fetchTodos();
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const deleteTodo = async (id) => {
    try {
      setLoading(true);
      setError("");

      await api.delete(`${BASE_URL}/${id}`);
      fetchTodos();
    } catch (err) {
      setError("Failed to delete todo");
    } finally {
      setLoading(false);
    }
  };

  const editTodo = (todo) => {
    setText(todo.title);
    setEditId(todo._id);
  };
  
  const toggleStatus = async (todo) => {
    try {
      await api.put(`${BASE_URL}/${todo._id}`, {
        title: todo.title,
        completed: !todo.completed,
      });
  
      fetchTodos();
    } catch (err) {
      console.log(err);
    }
  };
  
  const filteredTodos = todos.filter((todo) => {
    const matchSearch = todo.title
      .toLowerCase()
      .includes(search.toLowerCase());
  
    if (filter === "Completed") return matchSearch && todo.completed;
    if (filter === "Pending") return matchSearch && !todo.completed;
  
    return matchSearch;
  });

  return (
    <div className="container">
      <h1>Todo App</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <TaskForm
  text={text}
  setText={setText}
  handleSubmit={handleSubmit}
  editId={editId}
/>

<SearchBar
  search={search}
  setSearch={setSearch}
/>

<Filter
  filter={filter}
  setFilter={setFilter}
/>

<TaskList
  filteredTodos={filteredTodos}
  toggleStatus={toggleStatus}
  editTodo={editTodo}
  deleteTodo={deleteTodo}
/>
    </div>
  );
}

export default App;