import React from "react";

function TaskCard({ task }) {
  return (
    <div style={{
      background: "#fff",
      padding: "15px",
      marginTop: "10px",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div>
        <h3 style={{ margin: 0 }}>{task.title}</h3>
        <p style={{ margin: 0, color: "#777" }}>
          Status: {task.status}
        </p>
      </div>

      <span style={{
        padding: "5px 10px",
        borderRadius: "20px",
        background:
          task.status === "done"
            ? "#4CAF50"
            : task.status === "in-progress"
            ? "#ff9800"
            : "#2196f3",
        color: "#fff",
        fontSize: "12px"
      }}>
        {task.status}
      </span>
    </div>
  );
}

export default TaskCard;