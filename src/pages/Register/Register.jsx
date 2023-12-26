import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import login from "../../assets/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";








const Register = () => {
  const { createUser, updateUser, googleLogin } = useContext(AuthContext);

 
  const nevigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
 const [userEmail,setUserEmail] = useState()
const [token] = useToken(userEmail)

if(token){
  nevigate(from, { replace: true });
}

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log(data.email, data.password);
    createUser(data.email, data.password)
      .then((res) => {
        const userInfo = { displayName: data.name };
        updateUser(userInfo)
          .then((res) => {
            saveUser(data.email, data.name);
          })
          .then((error) => console.error(error));
        console.log(res.user);
      })
      .then((errors) => console.error(errors));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        nevigate(from, { replace: true });
      })
      .then((err) => console.error(err));
  };

  const saveUser = (email, name) => {
    const userInfo = { name, email };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserEmail(email)
      });
  };

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row items-center shadow-xl p-0 rounded-xl">
        <div className="text-center w-1/2 lg:text-left hidden lg:block">
          <img src={login} alt="" />
        </div>

        <div className="card shrink-0 lg:w-1/2 bg-base-200 p-10 rounded-none">
          <form onSubmit={handleSubmit(handleRegister)} className="card-body">
            <div className="my-6">
              <h1 className="text-5xl font-bold">Welcome</h1>
              <p className=" mt-2 text-gray-400 capitalize">
                Register your account
              </p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="user name"
                className="input input-bordered"
                required
                {...register("name")}
              />
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <label className="label">
              <Link
                to="/authentication/login"
                className="label-text-alt link link-hover"
              >
                Already have an account?{" "}
                <span className="font-semibold">Login Now</span>
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

export default Register;
