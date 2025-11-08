import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllTasksPage from "./pages/AllTasksPage";

export default function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/"> Home</Link>
        <Link to="/all-tasks"> All Tasks</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-tasks" element={<AllTasksPage />} />
      </Routes>
    </Router>
  );
}
