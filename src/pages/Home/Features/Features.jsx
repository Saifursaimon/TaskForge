import React from "react";
import FeatureCard from "../../../components/FeatureCard/FeatureCard";

const Features = () => {
    const features = [
        {
            _id:1,
            name:'Increase Output & Productivity',
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aspernatur quisquam odit possimus excepturi magnam itaque ab modi, reiciendis adipisci."
        },
        {
            _id:2,
            name:'Accesible Anywhere At Any Time',
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aspernatur quisquam odit possimus excepturi magnam itaque ab modi, reiciendis adipisci."
        },
        {
            _id:3,
            name:'Empower Team Members and Makes Them Execute Work', 
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aspernatur quisquam odit possimus excepturi magnam itaque ab modi, reiciendis adipisci."
        },
        {
            _id:4,
            name:'Accesible Anywhere At Any Time',
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aspernatur quisquam odit possimus excepturi magnam itaque ab modi, reiciendis adipisci."
        },
       
    ]
  return (
    <div className="mt-24">
      <div className="flex justify-around">
        <h1 className="text-4xl font-bold leading-normal">
          We Provides The <br /> Most Unique & <br /> Modern Featurs
        </h1>
        <p className="py-6 text-gray-400">
          Star building and developing your team by starting to manage <br />{" "}
          your team work system.And create a comfortable and easy <br />{" "}
          colaboration atmosphere.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-24">
           {
            features.map((feature) =>{
              return  <FeatureCard key={feature._id} feature={feature}></FeatureCard>
            })
           }
      </div>
    </div>
  );
};

export default Features;
