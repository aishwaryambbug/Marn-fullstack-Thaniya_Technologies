import React, { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import axios from "axios";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  // 🔹 Fetch tasks from backend
  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tasks");
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // 🔹 Add task to backend
  const addTask = async (task) => {
    try {
      await axios.post("http://localhost:5000/api/tasks", task);
      fetchTasks(); // refresh after adding
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f4f6f9",
      padding: "30px"
    }}>
      <div style={{
        maxWidth: "800px",
        margin: "auto"
      }}>
        <h1 style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#333"
        }}>
          🚀 Task Manager Dashboard
        </h1>

        <TaskForm addTask={addTask} />

        {tasks.length === 0 ? (
          <p style={{ textAlign: "center" }}>No tasks yet</p>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;