import React, { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  // fetch tasks from backend
  useEffect(() => {
    API.get("/tasks")
      .then(res => setTasks(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Dashboard</h1>

      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        tasks.map(task => (
          <div key={task._id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <p>{task.title}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;