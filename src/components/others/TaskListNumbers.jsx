import React from "react";

const TaskListNumbers = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex justify-between gap-6 lg:gap-12">
      <div className="w-full bg-blue-500 py-6 px-4 rounded-lg">
        <h2 className="text-3xl font-semibold">0</h2>
        <h4 className="text-xl font-semibold">New Task</h4>
      </div>
      <div className="w-full bg-lime-500 py-6 px-4 rounded-lg">
        <h2 className="text-3xl font-semibold">3</h2>
        <h4 className="text-xl font-semibold">Completed</h4>
      </div>
      <div className="w-full bg-yellow-500 py-6 px-4 rounded-lg">
        <h2 className="text-3xl font-semibold">0</h2>
        <h4 className="text-xl font-semibold">Accepted</h4>
      </div>
      <div className="w-full bg-orange-500 py-6 px-4 rounded-lg">
        <h2 className="text-3xl font-semibold">1</h2>
        <h4 className="text-xl font-semibold">Failed</h4>
      </div>
    </div>
  );
};

export default TaskListNumbers;
