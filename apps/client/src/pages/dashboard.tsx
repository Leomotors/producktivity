import type { ReactElement } from "react";
import { useState } from "react";

import type { NextPageWithLayout } from "next";

import Event from "../core/general/components/Event";
import Habit from "../core/general/components/Habit";
import Task from "../core/general/components/Task";
import DefaultLayout from "../core/general/layouts/default";
import Timer from "../modules/dashboard/components/Timer";

interface IHabits {
  id: number;
  text: string;
}
interface ITasks {
  id: number;
  name: string;
  topic: string[];
  date: Date;
}
interface IEvents {
  id: number;
  name: string;
  topic: string[];
  date: Date;
}
const Dashboard: NextPageWithLayout = () => {
  const [habits, setHabits] = useState<IHabits[]>([
    {
      id: 1,
      text: "idk",
    },
    {
      id: 2,
      text: "what are",
    },
    {
      id: 3,
      text: "these for",
    },
    {
      id: 4,
      text: "can someone just",
    },
    {
      id: 5,
      text: "explain",
    },
    {
      id: 3,
      text: "???",
    },
  ]);
  const deleteHabit = (id: number) => {
    setHabits(() => habits.filter((habit) => habit.id !== id));
  };
  const [tasks, setTasks] = useState<ITasks[]>([
    {
      id: 1,
      name: "kick students from line group",
      topic: ["cal", "nonsense", "bullshit"],
      date: new Date(),
    },
    {
      id: 2,
      name: "sleep",
      topic: ["please", "zzzz", "oc"],
      date: new Date(),
    },
    {
      id: 3,
      name: "grader",
      topic: ["comprog", "python3.5", "🥐"],
      date: new Date(),
    },
  ]);
  const deleteTask = (id: number) => {
    setTasks(() => tasks.filter((task) => task.id !== id));
  };
  const [events, setEvents] = useState<IEvents[]>([
    {
      id: 1,
      name: "kick students from line group",
      topic: ["cal", "nonsense", "ps"],
      date: new Date("2022-10-23"),
    },
    {
      id: 2,
      name: "sleep",
      topic: ["please", "zzzz", "oc"],
      date: new Date(),
    },
    {
      id: 3,
      name: "grader",
      topic: ["comprog", "python3.5", "🥐"],
      date: new Date(),
    },
  ]);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const deleteEvent = (id: number) => {
    setEvents(() => events.filter((event) => event.id !== id));
  };

  return (
    <DefaultLayout>
      <div className="h-full ml-8 p-4 rounded-lg bg-white w-11/12 overflow-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Overview</h1>
        <div className="flex flex-col md:flex-row w-full h-1/2 justify-between bg-red-100">
          <div className="bg-brown-100 w-full md:w-2/5">
            <div className="text-xl md:text-2xl font-bold md:mb-2">Timers</div>
            <div className="px-2 md:px-10 flex justify-between w-full h-full">
              <Timer></Timer>
              <Timer></Timer>
            </div>
          </div>
          <div className="flex-1 bg-orange-100">
            <div className="text-xl md:text-2xl font-bold md:mb-2">Habits</div>
            <div className="flex justify-center w-full h-full">
              <div className="grid grid-cols-4 gap-2 md:gap-4 rounded-lg w-full h-5/6">
                {habits.map((habit, index) => (
                  <Habit
                    key={index}
                    handleDelete={() => deleteHabit(habit.id)}
                    id={habit.id}
                    text={habit.text}
                  ></Habit>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full h-fit justify-between">
          <div className="flex-1 bg-blue-100 mb-2">
            <div className="text-xl md:text-2xl font-bold mb-4">Tasks</div>
            <div className="h-fit md:px-10 flex flex-col space-y-4 w-full bg-pink-200">
              {tasks.map((task, index) => (
                <Task
                  key={index}
                  date={task.date}
                  handleDelete={() => deleteTask(task.id)}
                  id={task.id}
                  name={task.name}
                  topic={task.topic}
                ></Task>
              ))}
            </div>
          </div>
          <div className="flex-1 bg-orange-100">
            <div className="text-xl md:text-2xl font-bold mb-4">
              Upcoming Events
            </div>
            <div className="md:px-10 flex flex-col space-y-4 justify-center w-full min-h-fit bg-pink-200">
              {events.map(
                (event, index) =>
                  event.date > yesterday && (
                    <Event
                      key={index}
                      date={event.date}
                      handleDelete={() => deleteEvent(event.id)}
                      id={event.id}
                      name={event.name}
                      topic={event.topic}
                    ></Event>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
