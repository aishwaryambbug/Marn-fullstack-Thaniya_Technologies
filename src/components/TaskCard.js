import React from "react";

function TaskCard({ task, deleteTask, updateTask }) {
  return (
    <div style={{
      background: "#fff",
      padding: "15px",
      marginTop: "10px",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>

      <button onClick={() => deleteTask(task._id)}>
        Delete
      </button>

      <button onClick={() =>
        updateTask(task._id, { status: "done" })
      }>
        Mark Done
      </button>
    </div>
  );
}

export default TaskCard;