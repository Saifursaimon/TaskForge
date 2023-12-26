import { BsFillTrash3Fill } from "react-icons/bs"; 
import { HiOutlinePencilAlt } from "react-icons/hi";
import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import useTask from "../hooks/useTask";

const TaskCard = ({ tsk }) => {
  const [, refetch] = useTask();
  const { register, handleSubmit } = useForm();
  const [hidden, setHidden] = useState(false);
  const { task, deadline, _id } = tsk;

  const handleUpdate = (data) => {
    const updatedInfo = {
      task: data.task,
      deadline: data.deadline,
      filter: data.filter,
    };

    fetch(`http://localhost:5000/tasks/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          setHidden(true);
          refetch();
        }
      });
  };


  const handleDelete = id => {

    fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount > 0){
        refetch()
      }
    })
  }

  return (
    <div className="card  bg-base-100 shadow-xl m-2">
      <div className="card-body">
        <div className=" flex justify-between items-start">
          <h1 className={`${hidden ? "hidden" : "block"} card-title`}>
            {task}{" "}
          </h1>
          <div className="flex items-center gap-5">
            <button
              className={`${hidden ? "hidden" : "block"}`}
              onClick={() => setHidden(true)}
            >
              <HiOutlinePencilAlt />
            </button>
            <button onClick={()=>handleDelete(_id)}>
             <BsFillTrash3Fill  className="text-red-500"/>
            </button>
          </div>
        </div>
        <p className={`${hidden ? "hidden" : "block"} text-gray-400`}>
          Due {deadline}
        </p>
        <form
          onSubmit={handleSubmit(handleUpdate)}
          className={` ${!hidden ? "hidden" : "block"}`}
        >
          <input
            type="text"
            placeholder="Task"
            className="input input-ghost w-full"
            required
            defaultValue={task}
            {...register("task")}
          />
          <input
            type="date"
            placeholder="Deadline"
            className="input input-ghost w-full"
            required
            defaultValue={deadline}
            {...register("deadline")}
          />
          <select
            className="select select-bordered w-full mt-4"
            {...register("filter")}
          >
            <option disabled selected>
              Filter
            </option>
            <option className="font-semibold">Not Started</option>
            <option className="font-semibold">In Progress</option>
            <option className="font-semibold">Done</option>
          </select>

          <div className="flex justify-center mt-4">
            <button type="submit" className="btn btn-sm btn-primary ">
              save
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default TaskCard;
