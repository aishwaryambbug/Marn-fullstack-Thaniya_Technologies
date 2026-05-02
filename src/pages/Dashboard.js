import React, { useState } from "react";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([task, ...tasks]);
  };

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
           Task Manager Dashboard
        </h1>

        {/* Form */}
        <TaskForm addTask={addTask} />

        {/* Task List */}
        {tasks.length === 0 ? (
          <p style={{
            textAlign: "center",
            color: "#777"
          }}>
            No tasks yet
          </p>
        ) : (
          tasks.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;