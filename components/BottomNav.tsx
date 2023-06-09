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
      <div className=" fixed fill-[#000000]  dark:fill-white bottom-5 w-full   ">
        <div className=" shadow-2xl flex justify-center items-center bg-white border-[#F3F4F6]  dark:bg-[#0b101a] dark:border-[#374151] border  rounded-xl max-w-[24rem] py-4 px-1">
          <Link href="/">
            <div className="transition relative group-hover:-translate-x-1 group-hover:-translate-y-2 bg-gray-100 dark:bg-[#1F2937] w-[60px] h-[60px] flex justify-center items-center mx-2 rounded-xl cursor-pointer hover:bg-[#d83838c2] dark:hover:bg-[#d83838c2] ">
            <img
          src="/Profile-Icon.png"
          width="40"
          height="40"
        />
            </div>
          </Link>
          <Link href="/project">
            <div className="transition relative group-hover:-translate-x-1 group-hover:-translate-y-2 bg-gray-100 dark:bg-[#1F2937]  w-[60px] h-[60px] flex justify-center items-center mx-2 rounded-xl cursor-pointer hover:bg-[#d83838c2] dark:hover:bg-[#d83838c2]   ">
              <img src="Marketplace.png" width="150" height="150" />
            </div>
          </Link>

          <Link href="/project">
            <div className="transition relative group-hover:-translate-x-1 group-hover:-translate-y-2 bg-gray-100 dark:bg-[#1F2937]  w-[60px] h-[60px] flex justify-center items-center mx-2 rounded-xl cursor-pointer hover:bg-[#d83838c2] dark:hover:bg-[#d83838c2]   ">
              <img src="Chat.png" width="30" height="30" />
            </div>
          </Link>
          <Link href="/about">
            <div className="transition relative group-hover:-translate-x-1 group-hover:-translate-y-2 bg-gray-100 dark:bg-[#1F2937] l w-[60px] h-[60px] flex justify-center items-center mx-2 rounded-xl cursor-pointer hover:bg-[#d83838c2] dark:hover:bg-[#d83838c2] ">
              <img src="Icons.png" width="40" height="40" />
            </div>
          </Link>

          <img src="Line1.svg" className="mx-2" />

          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="transition relative group-hover:-translate-x-1 group-hover:-translate-y-2 bg-gray-100 dark:bg-[#1F2937] w-[60px] h-[60px] flex justify-center items-center mx-2 rounded-xl cursor-pointer hover:bg-[#d83838c2] dark:hover:bg-[#d83838c2] "
            onClick={NewTheme}
          >
            {theme === "light" ? (
              <img src="lightMode.svg" width="40" height="40" />
            ) : (
              <img src="darkmode.svg" width="40" height="40" />
            )}
          </button>
        </div>
      </div>
      {/* @ts-ignore */}
    </center>
  );
}
