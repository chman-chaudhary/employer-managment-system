import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthContext from "./context/AuthContext";
import TaskContext from "./context/TaskContext";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <TaskContext>
        <App />
      </TaskContext>
    </AuthContext>
  </StrictMode>
);
