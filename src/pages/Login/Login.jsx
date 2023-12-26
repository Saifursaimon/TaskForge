import { AiOutlineGoogle } from "react-icons/ai";
import React, { useContext, useState } from "react";
import login from "../../assets/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";
const Login = () => {
  const { logIn, googleLogin } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState(" ");
  const nevigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [token] = useToken(userEmail);
  console.log(userEmail);

  if(token) {
    return nevigate(from,{replace:true})
  }
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data.email, data.password);
    logIn(data.email, data.password)
      .then((res) => {
        setUserEmail(res.user.email)
      })
      .then((error) => console.error(error));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        nevigate(from, { replace: true });
      })
      .then((err) => console.error(err));
  };

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse items-center shadow-xl p-0 rounded-xl">
        <div className="text-center w-1/2 lg:text-left hidden lg:block">
          <img src={login} alt="" />
        </div>

        <div className="card shrink-0 lg:w-1/2 bg-base-200 p-10 rounded-none">
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            <div className="my-6">
              <h1 className="text-5xl font-bold">Welcome</h1>
              <p className=" mt-2 text-gray-400 capitalize">
                Login to your account
              </p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                {...register("email")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                {...register("password")}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
            <label className="label">
              <Link
                to="/authentication/register"
                className="label-text-alt link link-hover"
              >
                Don't have an account?{" "}
                <span className="font-semibold">Register Now</span>
              </Link>
            </label>
          </form>
          <div className="divider">OR</div>
          <div className="form-control mt-6">
            <button onClick={handleGoogleLogin} className="btn btn-outline">
              <AiOutlineGoogle className="text-xl" />
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
