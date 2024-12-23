import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <div className="flex md:flex-row flex-col md:space-x-6 space-x-0 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]">
      {tasks.map((task, idx) => {
        return (
          <div
            key={idx}
            className={
              `md:w-[40vw] w-full h-56 flex-shrink-0 px-4 py-6 rounded-lg mt-4 space-y-3 ` +
              (idx % 3 === 0
                ? " bg-blue-500"
                : idx % 2 === 0
                ? " bg-lime-500"
                : " bg-yellow-500")
            }
          >
            <div className="flex justify-between items-center">
              <span
                className={
                  `text-base font-semibold rounded-md py-1 px-2` +
                  (task.priority === "High"
                    ? " bg-red-600"
                    : task.priority === "Medium"
                    ? " bg-yellow-500"
                    : " bg-lime-500")
                }
              >
                {task.priority}
              </span>
              <span className="text-base font-semibold">{task.date}</span>
            </div>
            <h2 className="text-2xl font-semibold">{task.title}</h2>
            <p className="h-28 text-lg font-medium overflow-y-scroll scrollbar-none">
              {task.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
