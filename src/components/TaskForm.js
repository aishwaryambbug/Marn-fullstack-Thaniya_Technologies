import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTask({
      title,
      status: "todo"
    });

    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        marginBottom: "20px"
      }}
    >
      <input
        type="text"
        placeholder="Enter new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          flex: 1,
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none"
        }}
      />

      <button
        type="submit"
        style={{
          marginLeft: "10px",
          padding: "12px 20px",
          border: "none",
          borderRadius: "8px",
          background: "#4CAF50",
          color: "#fff",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Add
      </button>
    </form>
  );
}

export default TaskForm;