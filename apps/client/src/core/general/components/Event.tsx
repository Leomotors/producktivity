import type { FC } from "react";

import CalendarIcon from "@heroicons/react/24/outline/CalendarIcon.js";

const Event: FC = () => {
  return (
    <div className="drop-shadow-lg flex justify-between w-full h-1/3 md:h-1/5 bg-emerald-50">
      <div className="p-2 md:px-8 flex flex-col justify-around w-full">
        <div className="md:text-md flex justify-between md:space-x-8 w-full">
          <h1 className="font-bold">Calculus Lecture</h1>
          <div className="flex items-center text-emerald-600 font-bold">
            <CalendarIcon className="h-6 w-6 mr-2" />
            20/10/22
          </div>
        </div>
        <div className="md:text-md flex space-x-4 w-full">
          <div className="rounded-full p-1 md:px-3 bg-white">Calculus I</div>
          <div className="rounded-full p-1 md:px-3 bg-white">ENG 2</div>
        </div>
      </div>
    </div>
  );
};

export default Event;