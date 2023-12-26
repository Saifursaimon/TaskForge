import { FaTasks } from "react-icons/fa"; 
import { FaUserTie } from "react-icons/fa"; 
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content mr-12 ">
            <Link to="/" className="btn btn-ghost text-3xl">
              Task<span className="text-primary">Forge</span>
            </Link>
            <ul className="mt-12">
              <li>
                <NavLink className="text-xl" to='/dashboard/profile'><FaUserTie />Profile</NavLink>
              </li>
              <li>
                <NavLink className="text-lg" to='/dashboard/mytask'><FaTasks />My Task</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
