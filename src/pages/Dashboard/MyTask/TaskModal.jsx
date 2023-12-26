import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../context/AuthProvider";
import useTask from "../../../hooks/useTask";

const TaskModal = ({ setOpenModal }) => {
  const { user } = useContext(AuthContext);
  const [, refetch] = useTask();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleModalSubmit = (data) => {
    const task = {
      task: data.task,
      deadline: data.deadline,
      filter: data.filter,
      email: user.email,
    };

    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        setOpenModal(false);
        refetch();
      });
  };
  return (
    <div className="">
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box flex justify-center">
          <form onSubmit={handleSubmit(handleModalSubmit)}>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-semibold">Task</span>
              </div>
              <input
                type="text"
                placeholder="Task"
                className="input input-bordered w-full"
                {...register("task")}
                required
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-semibold">Deadline</span>
              </div>
              <input
                type="date"
                placeholder="deadline"
                className="input input-bordered w-full"
                {...register("deadline")}
                required
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-semibold">Filter</span>
              </div>
              <select
                className="select select-bordered w-full "
                {...register("filter")}
                required="required"
              >
                <option className="font-semibold" selected>
                  Not Started
                </option>
                <option className="font-semibold">In Progress</option>
                <option className="font-semibold">Done</option>
              </select>
            </label>
            <div>
              <input
                type="submit"
                value="Add Task"
                className="btn btn-primary w-full mt-4"
              />
            </div>
          </form>
        </div>

        <label className="modal-backdrop" htmlFor="my_modal_6">
          Close
        </label>
      </div>
    </div>
  );
};

export default TaskModal;
