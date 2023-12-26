import { BiCheckboxChecked } from "react-icons/bi";
import React, { useContext } from "react";
import hero3 from "../../../assets/hero3.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
const GetStarted = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="hero bg-base-200 my-24">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={hero3} className="lg:w-1/3" />
        <div>
          <h1 className="text-4xl font-bold capitalize">
            Get started with <br /> a free plan
          </h1>
          <p className="py-6 w-1/2">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex items-center gap-5 my-3">
            <p className="flex gap-1 items-center">
              <BiCheckboxChecked className="text-xl" />
              30-days free trial
            </p>
            <p className="flex gap-1 items-center">
              <BiCheckboxChecked className="text-xl" />
              No credit card required
            </p>
          </div>
          <Link
            to={user ? "/dashboard/profile" : "/authentication/register"}
            className="btn btn-primary rounded-full"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
