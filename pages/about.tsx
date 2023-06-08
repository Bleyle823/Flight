/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function About() {
  return (
    <div className="container mx-auto flex flex-col items-start px-5 mt-6 max-w-5xl min-h-[182vh] xs:min-h-[170vh] sm:min-h-screen ">
      <div className="bg-[#d83838]  h-[120px] top-36 right-20 absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <div className="bg-[#d83838]  h-[120px] top-[200px] right-[200px] absolute w-[120px] rounded-full blur-[90px] filter "></div>
      <h1 className="SpaceGroteskBold text-[50px] sm:text-[64px]">
      Lorem ipsum dolor sit amet, 👨‍
      </h1>
      <p className="SpaceGroteskRegular text-[20px] sm:text-[24px] ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <h1 className="SpaceGroteskRegular py-5 text-2xl sm:text-4xl ">
      Lorem ipsum {" "}
        <span className=" text-4xl sm:text-6xl SpaceGroteskBold ">
        Lorem ipsum dolor .
        </span>
      </h1>
      <div className="bg-[#d83838]  h-[120px] top-[30rem] left-[5px] absolute w-[120px] rounded-full blur-[90px] filter "></div>

      <div className="SpaceGroteskRegular text-[20px] sm:text-[24px]  max-w-5xl mt-3">
        <p className="SpaceGroteskRegular text-[20px] sm:text-[24px]  py-5">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec lorem in neque semper luctus. 
         Ut ex lectus, volutpat commodo sagittis at, dictum in libero. Sed luctus nunc accumsan, lacinia arcu id, dignissim est. 
         Proin nec lacus vestibulum, semper magna ac, venenatis velit. Mauris nec tempor nisi. Phasellus fermentum ultricies aliquet. 
         Integer nec fringilla neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
         Vivamus placerat nulla tincidunt mauris porta posuere ac in eros. Pellentesque velit mauris, faucibus vitae dui sed, fringilla consequat arcu.
         Donec imperdiet eget magna eget luctus. Aenean leo lacus, pharetra in pretium eu, ultricies eget odio. Nullam ac facilisis est.
        </p>
        <p className="SpaceGroteskRegular text-[20px] sm:text-[24px]  py-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec lorem in neque semper luctus. 
         Ut ex lectus, volutpat commodo sagittis at, dictum in libero. Sed luctus nunc accumsan, lacinia arcu id, dignissim est. 
         Proin nec lacus vestibulum, semper magna ac, venenatis velit. Mauris nec tempor nisi. Phasellus fermentum ultricies aliquet. 
         Integer nec fringilla neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
         Vivamus placerat nulla tincidunt mauris porta posuere ac in eros. Pellentesque velit mauris, faucibus vitae dui sed, fringilla consequat arcu.
         Donec imperdiet eget magna eget luctus. Aenean leo lacus, pharetra in pretium eu, ultricies eget odio. Nullam ac facilisis est.
        </p>
      </div>
      <>
        <div className="relative block group  my-7 cursor-pointer">
          <span className="absolute inset-0 border-2  border-[#188AEC] rounded-lg"></span>
          <div className="transition bg-[#188AEC] text-white rounded-lg group-hover:-translate-x-0  group-hover:-translate-y-0 -translate-x-3 translate-y-2">
            <div className="py-3 px-10 ">
              <p className="mt-1 text-xl">Say Hello</p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
