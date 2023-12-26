import { AiOutlineArrowRight } from "react-icons/ai"; 
import { BsQuote } from "react-icons/bs"; 
import React from "react";

const FeatureCard = ({feature}) => {
    const {name,details} = feature;
  return (
    <div className="card max-w-96 mx-auto bg-base-100 rounded-none border-2 border-accent hover:bg-primary ">
      <figure className="text-5xl mt-5">
       <BsQuote />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{details}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline"><AiOutlineArrowRight className="text-xl" /></button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
