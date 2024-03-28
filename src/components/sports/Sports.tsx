"use client";
import React from "react";
import Data from "../../data/Data";
import Image from "next/image";
import Img from "../../assests/img3.png";

const Sports = () => {
  return (
    <div className="container mx-auto w-auto  h-[673px]">
      <div className="">
        <span className="text-xl font-bold border-b border-black ">sports</span>
        <div className="flex h-full my-7 gap-5">
          {Data?.map((item, index) => {
            return (
              <div
                key={index}
                className="w-60 border gap-9 shadow-md shadow-gray-300"
              >
                <div className="p-2">
                  <Image src={item.img} alt="nj" width={600} height={600} />
                </div>
                <div className=" items-center text-center">
                  <h4 className="text-lg"> {item.name}</h4>
                  <div className="bg-neutral-200  mx-2 my-3 py-3 px-2">
                    <div className="w-auto mb-2  flex justify-between text-sm font-normal">
                      <h3 className="text-gray-400">Total Events</h3>
                      <h3 className="text-gray-400">Sport </h3>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black"> {item.event}</span>
                      <span className="text-black pl-5">{item.interest}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="w-60 border gap-9 shadow-md shadow-gray-300">
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
              <h3 className=" text-center my-3">Advertisement title</h3>
              <p className="mb-9 text-sm">
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
