"use client";
import React from "react";
import Data from "../../data/Data";
import Image from "next/image";
import Img from "../../assests/img3.png";
import ThemeToggle from "../BgTheme/ThemeToggle";

const Sports = () => {
  return (
    <div className="container mx-auto w-auto h-[673px]  ">
      <div className="my-2">
        <div className="flex justify-between">
        <span className="text-xl font-bold border-b border-blue-500 mb-9 dark:text-white"> <span className="mb-9">sports</span>
        </span>
        <ThemeToggle/>
        </div>
     
        <div className="flex h-full my-7 gap-5">
          {Data?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-60  dark:bg-[#3B3E47]  gap-9 shadow-md dark:shadow-black"
              >
                <div className="p-2">
                  <Image src={item.img} alt="nj" width={600} height={600} loading="lazy" />
                </div>
                <div className=" items-center text-center">
                  <h4 className="text-lg dark:text-white"> {item.name}</h4>
                  <div className="bg-neutral-200 dark:bg-[#292B32]  mx-2 my-3 py-3 px-2">
                    <div className="w-auto mb-2  flex justify-between text-sm font-normal">
                      <h3 className="text-gray-400  dark:text-gray-400">Total Events</h3>
                      <h3 className="text-gray-400 dark:text-gray-400">Sport </h3>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black dark:text-white"> {item.event}</span>
                      <span className="text-black pl-5 dark:text-white">{item.interest}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="w-60  gap-9 shadow-md dark:shadow-black dark:bg-[#3B3E47]">
            <div className="p-2">
              <Image
                src={Img}
                alt="nj"
                className="w-full"
                width={200}
                height={100}
              />
            </div>
            <div className="py-1 px-4">
              <h3 className=" text-center my-3 dark:text-white">Advertisement title</h3>
              <p className="mb-9 text-sm dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
