import React from "react";

export default function TaskList({ tasks, toggleStatus, deleteTask }) {
  if (tasks.length === 0) {
    return <p style={{ textAlign: "center" }}>No tasks available.</p>;
  }

  return (
    <table className="task-table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td style={{ color: task.completed ? "#28a745" : "#dc3545" }}>
              {task.completed ? "Completed" : "Pending"}
            </td>
            <td className="task-actions">
              <button
                className="complete"
                onClick={() => toggleStatus(task.id)}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button className="delete" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
