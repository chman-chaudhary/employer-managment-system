import React, { useState } from "react";

const AdminDashboard = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    date: "",
    assignTo: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(task);
  };

  return (
    <div className="flex justify-start items-center flex-col w-full h-screen sm:py-2 py-0">
      <div className="w-full sm:w-4/5 sm:h-screen h-full bg-zinc-900 flex flex-col items-center justify-start gap-5 py-4">
        <h1 className="text-4xl font-semibold">Create Task</h1>
        <form onSubmit={handleSubmit} className="w-4/5 space-y-4">
          <div className="space-y-2">
            <label>Task Title:</label>
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              placeholder="Make a UI design"
              className="w-full px-4 py-2 bg-zinc-700 rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <label>Description:</label>
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-zinc-700 rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={task.date}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-zinc-700 rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <label>Assign To:</label>
            <input
              type="text"
              name="assignTo"
              value={task.assignTo}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-zinc-700 rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <label>Category:</label>
            <input
              type="text"
              name="category"
              value={task.category}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-zinc-700 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-black font-semibold rounded-lg"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
