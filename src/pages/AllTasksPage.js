import React, { useEffect, useState } from "react";

const API_BASE = "https://jsonplaceholder.typicode.com/todos";

export default function AllTasksPage() {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);
  const tasksPerPage = 20;

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(API_BASE);
        const data = await res.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching all tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const totalPages = Math.ceil(tasks.length / tasksPerPage);
  const startIndex = (page - 1) * tasksPerPage;
  const currentTasks = tasks.slice(startIndex, startIndex + tasksPerPage);

  return (
    <div className="app-container">
      <h1>All Tasks </h1>
      {currentTasks.length === 0 ? (
        <p>Loading tasks...</p>
      ) : (
        <ul className="all-tasks-list">
          {currentTasks.map((task) => (
            <li key={task.id}>
              <strong>{task.title}</strong> —{" "}
              {task.completed ? "✅ Completed" : "❌ Pending"}
            </li>
          ))}
        </ul>
      )}

      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          ⬅ Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}>
          Next ➡
        </button>
      </div>
    </div>
  );
}
