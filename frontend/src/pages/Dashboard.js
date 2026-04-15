import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data.data);
  };

  const createTask = async () => {
    await api.post("/tasks", { title });
    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>

      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={createTask}>Add Task</button>

      {tasks.map((task) => (
        <div key={task._id}>
          <h4>{task.title}</h4>
          <button onClick={() => deleteTask(task._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}