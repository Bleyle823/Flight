import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
export default function BottomNav() {
  const { theme, setTheme } = useTheme();
  const NewTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  console.log(theme);
  return (
    //@ts-ignore
    <center>
            <div className="fixed fill-[#000000]  dark:fill-white bottom-5 w-full  ">
            <div className=" shadow-2xl  flex justify-center items-center bg-white border-[#F3F4F6]  dark:bg-[#0b101a] dark:border-[#374151] border bg-black/30 filter backdrop-blur-md rounded-xl max-w-[24rem] py-4 px-1">
          <Link href="/">
            <div className="transition relative group-hover:-translate-x-1 group-hover:-translate-y-2  bg-gray-100 dark:bg-[#1F2937] w-[47px] h-[47px] flex justify-center items-center mx-1 rounded-xl cursor-pointer hover:bg-[#f37f7fc2] dark hover:bg-[#f37f7fc2] ">
            <img
          src="/Home.png"
          width="40"
          height="40"
        />
            </div>
          </Link>
          <Link href="/SendInfo">
            <div className="transition relative group-hover:-translate-x-1 group-hover:-translate-y-2 bg-gray-100 dark:bg-[#1F2937]  w-[47px] h-[47px] flex justify-center items-center mx-1 rounded-xl cursor-pointer hover:bg-[#f37f7fc2] dark hover:bg-[#f37f7fc2]   ">
              <img src="/Storage.png" width="150" height="150" />
            </div>
          </Link>

          <Link href="/chat">
            <div className="transition relative group-hover:-translate-x-1 group-hover:-translate-y-2 bg-gray-100 dark:bg-[#1F2937]  w-[47px] h-[47px] flex justify-center items-center mx-2 rounded-xl cursor-pointer hover:bg-[#f37f7fc2] dark hover:bg-[#f37f7fc2]   ">
              <img src="/Chat.png" width="30" height="30" />
            </div>
          </Link>
          <Link href="/Video">
            <div className="transition relative group-hover:-translate-x-1 group-hover:-translate-y-2 bg-gray-100 dark:bg-[#1F2937] l w-[47px] h-[47px] flex justify-center items-center mx-2 rounded-xl cursor-pointer hover:bg-[#f37f7fc2] dark hover:bg-[#f37f7fc2] ">
              <img src="/VideoChat2.png" width="35" height="35" />
            </div>
          </Link>
          <Link href="/HuddleLiveStream">
            <div className="transition relative group-hover:-translate-x-1 group-hover:-translate-y-2 bg-gray-100 dark:bg-[#1F2937] l w-[47px] h-[47px] flex justify-center items-center mx-2 rounded-xl cursor-pointer hover:bg-[#f37f7fc2] dark hover:bg-[#f37f7fc2] ">
              <img src="/Live2.png" width="35" height="35" />
            </div>
          </Link>

          
          <Link href="/Tickets">
            <div className="transition relative group-hover:-translate-x-1 group-hover:-translate-y-2 bg-gray-100 dark:bg-[#1F2937] l w-[47px] h-[47px] flex justify-center items-center mx-2 rounded-xl cursor-pointer hover:bg-[#f37f7fc2] dark hover:bg-[#f37f7fc2] ">
              <img src="/Events2.png" width="35" height="35" />
            </div>
          </Link>
        </div>
      </div>
      {/* @ts-ignore */}
    </center>
  );
}
