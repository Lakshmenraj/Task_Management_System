import { useState, useEffect } from "react";

const API_BASE = "https://jsonplaceholder.typicode.com/todos";

export default function useTasks(limit = 8) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(`${API_BASE}?_limit=${limit}`);
        const data = await res.json();

        const formatted = data.map((t) => ({
          id: t.id,
          title: t.title,
          description: "This is a sample description.",
          completed: t.completed,
        }));

        setTasks(formatted);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [limit]);

  const addTask = async (title, description) => {
    const newTask = { title, description, completed: false };

    const res = await fetch(API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });

    const data = await res.json();

    setTasks((prev) => [{ ...data, id: Date.now() }, ...prev]);
  };

  const toggleStatus = async (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

    await fetch(`${API_BASE}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: true }),
    });
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (error) {
      console.error("Failed to delete:", error);
    }
  };

  return { tasks, addTask, toggleStatus, deleteTask };
}
