import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import ReactECharts from "echarts-for-react";
import useTask from "../../../hooks/useTask";
import TaskCard from "../../../components/TaskCard";
import dashboard from "../../../assets/dashboard.png";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [tasks] = useTask();
  const notStarted = tasks.filter((task) => task.filter === "Not Started");
  const inProgress = tasks.filter((task) => task.filter === "In Progress");
  const done = tasks.filter((task) => task.filter === "Done");
  const options = {
    title: {
      text: "Task Activity",
      subtext: "",
      x: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "vertical",
      left: "right",
      data: ["Not Started", "In Progress", "Done"],
    },
    series: [
      {
        name: "Task",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
          { value: notStarted.length, name: "Not Started" },
          { value: done.length, name: "Done" },
          { value: inProgress.length, name: "In Progress" },
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  const option2 = {
    title: {
      text: "Completed Tasks",
    },
    toolbox: {
      feature: {
        saveAsImage: {},
        dataZoom: {},
        restore: {},
      },
    },
    tooltip: {},
    legend: {
      data: ["Tasks"],
    },
    xAxis: {
      data: ["In Progress","Done"],
    },
    yAxis: {},
    series: [
      {
        name: "Tasks",
        type: "line",
        data: [inProgress.length,done.length],
      },
    ],
  };
  return (
    <div className="my-12">
      <h1 className="text-4xl capitalize font-bold">Profile</h1>
      <h1 className="text-2xl capitalize font-semibold mt-2">
        Welcome back {user?.displayName} !
      </h1>

      <div className=" flex items-center gap-10">
        <img className="w-1/2" src={dashboard} alt="" />

        <div className="w-1/2">
          <ReactECharts option={option2} opts={{ locale: "FR" }} />
        </div>
      </div>

      <div className="mt-12 flex items-center gap-10 ">
        <div className="w-1/2 shadow-xl p-8 rounded-xl">
          <ReactECharts option={options} />
        </div>

        <div className="w-1/2 ">
          <div className=" bg-base-200  rounded-xl p-5 shadow-xl">
            <h2 className="text-2xl font-semibold mb-5 flex">In Progress</h2>
            <div>
              {inProgress.map((tsk) => (
                <TaskCard key={tsk._id} tsk={tsk}></TaskCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
