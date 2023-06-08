/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function Hero() {
  return (
    <div className="relative mx-auto  flex flex-col justify-center items-center h-screen -mt-28 ">
      <div className="bg-[#d83838] h-[120px] top-36 right-20 absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <div className="bg-[#d83838] h-[120px] top-[200px] right-[200px] absolute w-[120px] rounded-full blur-[90px] filter "></div>
      

          <div className="container w-full mx-auto flex flex-wrap justify-between">
      <div className="flex flex-col items-start justify-center max-w-xl  px-[30px]">
        <h1 className="text-8xl font-bold  text-left">
          Let's get fusely together
        </h1>
        <p className="text-lg my-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          expedita id dolorum molestias delectus odio, incidunt est reiciendis
          laboriosam non quam dolor nam, ipsum similique quod modi nulla optio
          iure!
        </p>
         <div className="bg-[#d83838] h-[120px] top-[200px] left-[5px] absolute w-[120px] rounded-full blur-[90px] filter "></div>
        <button className="p-3 bg-indigo-500 rounded-xl flex justify-center sm:justify-start my-4">
          {" "}
          Get Started
        </button>
      </div>

      <div className="flex flex-col items-center  justify-center">
        <img
          src="/Drone1.png"
         
        />
      </div>
    </div>
        

        
       
      
    </div>
  );
}
