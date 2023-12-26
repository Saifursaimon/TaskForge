import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Navbar = () => {
  const { user,LogOut } = useContext(AuthContext);
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Features</Link>
      </li>
      <li>
        <Link to="/">Pricing</Link>
      </li>
      <li>
        <Link to="/">Blogs</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard/profile">Dashboard</Link>
        </li>
      )}
    </>
  );


const handleSignOut = () => {
  LogOut()
  .then(res =>{})
  .then(error =>console.log(error));
}

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Task<span className="text-primary">Forge</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end gap-3">
        {!user && (
          <>
            {" "}
            <Link
              to="/authentication/login"
              className="btn btn-primary rounded-full"
            >
              Sign in
            </Link>
            <Link
              to="/authentication/register"
              className="btn btn-neutral rounded-full"
            >
              Get Started
            </Link>
          </>
        )}
        {user && (
          <Link
            to="/"
            className="btn btn-primary rounded-full"
            onClick={handleSignOut}
          >
            Sign out
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
