import useTasks from "../hooks/useTasks";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function HomePage() {
  const { tasks, addTask, toggleStatus, deleteTask } = useTasks();

  return (
    <div className="app-container">
      <h1>Task Management System</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleStatus={toggleStatus}
        deleteTask={deleteTask}
      />
    </div>
  );
}
