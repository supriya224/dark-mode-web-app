import React from "react";
import Image from "next/image";
import Img from "../../assests/imgh.png";

const SportComponent = () => {
  return (
    <div className="container w-full mx-auto ">
      <div className=" mx-auto w-fit">
        <div className=" w-full h-full mx-auto z-10  ">
          <div className="">
            <div className="bg-white relative drop-shadow-2xl p-1 m-4 dark:bg-[#3B3E47]">
              <div className="flex-none sm:flex">
                <div className="flex-auto justify-evenly">
                  <div className="flex items-center">
                    <Image src={Img} width={300} alt="" loading="lazy" />
                  </div>
                  <div className="leading-7 dark:text-white"> 
                    <h3 className="text-center text-xl">
                    Las Vegas Aviators
                    </h3>
                    <div className="flex justify-between px-14">
                        <span className="border-r border-black dark:border-white pr-1">OCT 15</span>
                        <span className="border-r border-black dark:border-white  pr-1">SUN</span>
                        <span>4:30 PM</span>
                    </div>
                    <h3 className="text-center my-4">
                    Sutter Health Park, Sacramento, California
                    </h3>
                    <button className="bg-black text-white px-4 w-full p-3">
                    Take Flight Collection
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

export default SportComponent;

{
  /* <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"> */
}
{
  /* <style>
	.barcode {
		left: 50%;
		box-shadow: 1px 0 0 1px, 5px 0 0 1px, 10px 0 0 1px, 11px 0 0 1px, 15px 0 0 1px, 18px 0 0 1px, 22px 0 0 1px, 23px 0 0 1px, 26px 0 0 1px, 30px 0 0 1px, 35px 0 0 1px, 37px 0 0 1px, 41px 0 0 1px, 44px 0 0 1px, 47px 0 0 1px, 51px 0 0 1px, 56px 0 0 1px, 59px 0 0 1px, 64px 0 0 1px, 68px 0 0 1px, 72px 0 0 1px, 74px 0 0 1px, 77px 0 0 1px, 81px 0 0 1px, 85px 0 0 1px, 88px 0 0 1px, 92px 0 0 1px, 95px 0 0 1px, 96px 0 0 1px, 97px 0 0 1px, 101px 0 0 1px, 105px 0 0 1px, 109px 0 0 1px, 110px 0 0 1px, 113px 0 0 1px, 116px 0 0 1px, 120px 0 0 1px, 123px 0 0 1px, 127px 0 0 1px, 130px 0 0 1px, 131px 0 0 1px, 134px 0 0 1px, 135px 0 0 1px, 138px 0 0 1px, 141px 0 0 1px, 144px 0 0 1px, 147px 0 0 1px, 148px 0 0 1px, 151px 0 0 1px, 155px 0 0 1px, 158px 0 0 1px, 162px 0 0 1px, 165px 0 0 1px, 168px 0 0 1px, 173px 0 0 1px, 176px 0 0 1px, 177px 0 0 1px, 180px 0 0 1px;
		display: inline-block;
		transform: translateX(-90px);
	}
</style> */
}
