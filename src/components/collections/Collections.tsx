import { collectionData } from "@/data/Data";
import Image from "next/image";
import React from "react";

interface CollectionItem {
  index: number;
  img: string;
  name: string;
  date: string;
  day: string;
  time: string;
  content: string;
  btn: string;
}

const Collections: React.FC = () => {
  return (
    <div className="container w-auto mx-auto h-screen bg-blue-50">
      <div>
        <div className="py-9 text-center">
          <h2 className="text-4xl font-extrabold">Collection Spotlight</h2>
          <p className="px-32 mt-4 font-normal text-sm">
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today!
          </p>
        </div>
        <div className="flex gap-9 justify-center bg-center bg-cover">
          {collectionData?.map((item: CollectionItem, index: number) => {
            return (
              <div key={index} className="">
                <div className="w-460 h-fit mx-auto z-10 ">
                  <div className="flex flex-col ">
                    <div className="bg-white relative drop-shadow-2xl shadow-gray-50 p-4 m-4">
                      <Image
                        src={item.img}
                        alt="img"
                        width={400}
                        height={400}
                      />
                      <div className="flex-none sm:flex ">
                        <div className="flex-auto items-center justify-evenly">
                          <div className="text-sm">
                            <div className="absolute overflow-hidden  rounded-full w-5 h-5 bg-blue-50 -mt-2 -left-2"></div>
                            <div className="border-b border-dashed border-b-1 my-5 pt-5"></div>
                            <div className="absolute rounded-full w-5 h-5 bg-blue-50 -mt-12 -right-2"></div>
                            <div className="text-center">
                              <h3>{item.name}</h3>
                              <div className="flex text-sm gap-3 text-center items-center justify-center ">
                                <h3 className="border-r border-black">
                                  {item.date}
                                </h3>
                                <h3 className="border-r border-black">
                                  {item.day}
                                </h3>
                                <h3>{item.time}</h3>
                              </div>
                              <h3 className="text-xs">{item.content}</h3>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="bg-black w-full p-2 my-2 text-white"
                          >
                            {item.btn}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collections;
