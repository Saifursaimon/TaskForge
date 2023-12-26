import { AiOutlinePlus } from "react-icons/ai";
import React, { useState } from "react";
import TaskModal from "./TaskModal";
import TaskCard from "../../../components/TaskCard";
import useTask from "../../../hooks/useTask";
import { RxDotFilled } from "react-icons/rx";

const MyTask = () => {
  const [tasks, refetch] = useTask();
  const [openModal, setOpenModal] = useState(true);

  const notStarted = tasks.filter((task) => task.filter === "Not Started");
  const inProgress = tasks.filter((task) => task.filter === "In Progress");
  const done = tasks.filter((task) => task.filter === "Done");
  return (
    <div className="mt-12">
      <h1 className="text-4xl capitalize font-bold">Tasks</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">

        <div>
          <div className=" bg-base-200 rounded-xl  p-5">
            <h2 className="text-2xl font-semibold mb-5 flex">
              <RxDotFilled className="text-red-500 text-4xl" />
              Not Started
            </h2>
            <div>
              {notStarted.map((tsk) => (
                <TaskCard key={tsk._id} tsk={tsk}></TaskCard>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className=" bg-base-200  rounded-xl p-5">
            <h2 className="text-2xl font-semibold mb-5 flex">
              <RxDotFilled className="text-yellow-500 text-4xl" />
              In Progress
            </h2>
            <div>
              {inProgress.map((tsk) => (
                <TaskCard key={tsk._id} tsk={tsk}></TaskCard>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className=" bg-base-200 rounded-xl p-5">
            <h2 className="text-2xl font-semibold mb-5 flex">
              <RxDotFilled className="text-green-500 text-4xl" />
              Done
            </h2>
            <div>
              {done.map((tsk) => (
                <TaskCard key={tsk._id} tsk={tsk}></TaskCard>
              ))}
            </div>
          </div>
        </div>

      </div>
      <div className="flex justify-center mt-24">
        <label
          onClick={() => setOpenModal(true)}
          htmlFor="my_modal_6"
          className="btn flex justify-center text-secondary text-lg"
        >
          <AiOutlinePlus /> Add Task
        </label>
      </div>
      {openModal && <TaskModal setOpenModal={setOpenModal}></TaskModal>}
    </div>
  );
};

export default MyTask;
