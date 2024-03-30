import React from "react";
import Image from "next/image";
import Img from "../../assests/img4.png";

const TicektComponent = () => {
  return (
    <div className="container w-full mx-auto">
      <div className=" mx-auto w-fit">
        <div className=" w-full h-full mx-auto z-10  ">
          <div className="">
            <div className="bg-white dark:bg-[#3B3E47] relative drop-shadow-2xl p-1 m-4">
              <div className="flex-none sm:flex">
                <div className="flex-auto justify-evenly">
                  <div className="flex items-center w-fit">
                    <Image src={Img} width={300} alt=" w-full" loading="lazy" />
                  </div>
                 <div className="leading-7 dark:text-white"> 
                    <h3 className="text-center text-xl">
                    Sacramento River Cats   
                    </h3>
                    <div className="flex justify-between px-14">
                        <span className="border-r border-black dark:border-white  pr-1">OCT 15</span>
                        <span className="border-r border-black dark:border-white  pr-1">SUN</span>
                        <span>4:30 PM</span>
                    </div>
                    <h3 className="text-center my-4">
                    Sutter Health Park, Sacramento, California
                    </h3>
                    <button className="bg-black text-white px-4 w-full p-3">
                    Orange Collection
                    </button>
                 </div>

                  <div className="flex flex-col py-2  justify-center text-sm "></div>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicektComponent;

