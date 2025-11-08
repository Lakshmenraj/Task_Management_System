import React from "react";

export default function TaskItem({ task, toggleStatus, deleteTask }) {
  return (
    <div className="task-card">
      <div className="task-header">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleStatus(task.id)}
        />
        <h3 className={task.completed ? "completed" : ""}>{task.title}</h3>
      </div>

      <p>{task.description}</p>

      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
}
