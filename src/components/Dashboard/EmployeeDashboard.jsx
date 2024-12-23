import React, { useState } from "react";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
import TaskHeader from "../others/TaskHeader";

const EmployeeDashboard = () => {
  const [tasks, setTasks] = useState([
    {
      title: "Task Title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in ea, illum eveniet laboriosam perspiciatis recusandae doloremque ipsa fugiat dignissimos architecto eum repudiandae magnam ad quae consequatur qui minus quisquam excepturi at! Doloremque culpa voluptatibus neque fugit officia, ipsum impedit!",
      date: "23 Dec 2025",
      priority: "High",
    },
    {
      title: "Task Title",
      description: "Task Description",
      date: "23 Dec 2025",
      priority: "High",
    },
    {
      title: "Task Title",
      description: "Task Description",
      date: "23 Dec 2025",
      priority: "High",
    },
    {
      title: "Task Title",
      description: "Task Description",
      date: "23 Dec 2025",
      priority: "High",
    },
  ]);
  return (
    <div className="px-20 py-10 space-y-16">
      <TaskHeader />
      <TaskListNumbers />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default EmployeeDashboard;
