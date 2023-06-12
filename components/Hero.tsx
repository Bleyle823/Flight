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
          src="/BoredApePilot.png"
          width="750"
          height="750"
        />


        {/*  <div className="absolute bottom-80 -ml-80 p-7 rounded-xl w-80 ">
       <div className="hidden absolute bottom-14 lg:flex  h-20 lg:text-xs  items-center rounded bg-black/20 filter backdrop-blur-md lg:px-3 xl:px-6 "> 
                <div className="mx-4">
                  <div className="outerSans grid grid-cols-2">
                    <h1 className="mr-2">Current Bid</h1>
                    <h1>Ends In</h1>
                  </div>
                  <div className="joyride grid grid-cols-2 ">
                    <h1>0.99eth</h1>
                    <h1>25 HRS</h1>
                  </div>
                </div>
                <button className="outerSans  rounded bg-gradient-to-r  from-[#d29c6f] to-[#e76060] px-7 py-3 text-black">
                  Start Bid
                </button>
              </div>  
                   */}




      </div>
      <div className="bg-[#d83838] h-[100px] top-36 right-20 absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <div className="bg-[#d83838] h-[100px] top-[200px] right-[200px] absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <div className="container relative z-50 mx-auto flex flex-col py-10">
            <h1 className="joyride text-3xl text-center">Powered by</h1>
            <div className="flex flex-wrap items-center justify-center py-4">
              <img src="/binance 1.svg" className="px-5 py-2" />
              <img src="/bitmex 1.svg" className="px-5 py-2" />
              <img src="/blockport 1.svg" className="px-5 py-2" />
              <img src="/coinbase 1.svg" className="px-5 py-2" />
            </div>
          </div>
    </div>
        

        
       
      
    </div>
  );
}
