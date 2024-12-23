import React from "react";

const TaskHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h4 className="text-2xl font-semibold">Hello,</h4>
        <h2 className="text-4xl font-semibold">Chaman👋</h2>
      </div>
      <button className="px-2 py-1 font-semibold bg-red-600 rounded-md">
        Logout
      </button>
    </div>
  );
};

export default TaskHeader;
