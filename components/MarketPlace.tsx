import React from "react";
import { NftCard } from "./NftCard";

export default function MarketPlace() {
  return (
    <>
      <section className="">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="p-6 xl:col-span-3">
              <div className="grid md:grid-cols-2">
                <div className="grid content-center ml-[3vw] relative -mt-[10rem]">
                  <div className="py-10">
                    <NftCard image="top1.jpg" />
                  </div>
                  <div className="py-10">
                    <NftCard image="top2.jpg" />
                  </div>
                </div>
                <div className="grid content-center ">
                  <div className="py-10">
                    <NftCard image="top3.jpg" />
                  </div>
                  <div className="py-10">
                    <NftCard image="top4.jpg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-2xl my-8 space-y-4  xl:col-span-2 text-left">
              <h2 className="text-5xl sm:text-[80px] font-bold">
                FPV NFT Marketplace
              </h2>
              <p className="">
              The platform features a virtual marketplaces where FPV racing enthusiasts can buy & sell NFT based aerial videos and pictures . 
              By leveraging blockchain, these marketplaces can ensure secure transactions and verifiable ownership. 
              Pilots can have confidence in the authenticity and condition of the items being traded, fostering trust within the community.
              </p>

              <button className="px-6 py-3  border-2 ml-10 flex items-center  sm:text-lg font-bold rounded-3xl glass transition-colors duration-500 text-white ">
                Explore Marketplace <img src="arrow.svg" className="pl-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
