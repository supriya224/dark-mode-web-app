import React from "react";
import SportComponent from "../domain/sportComponent";
import TicektComponent from "../domain/ticketComponent";
import { ChevronLeft, ChevronRight } from "react-feather";

const Collections: React.FC = () => {
  return (
    <div className="container w-full mx-auto dark:bg-gradient-to-b from-[#18282A] to-[#221A2C] ">
      <div className="py-9 text-center">
        <h2 className="text-4xl font-extrabold dark:text-white">Collection Spotlight</h2>
        <p className="px-32 mt-4 font-normal text-sm dark:text-white">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
      </div>
      <div className="relative flex justify-between">
        <span className="">
          <ChevronLeft
            className="border border-cyan-400 text-cyan-400 absolute top-56 left-12"
            size={40}
          />
        </span>
        <span className="text-black border">
          <ChevronRight
            className="border border-cyan-400 text-cyan-400 absolute top-56 right-12"
            size={40}
          />
        </span>
      </div>
      <div className="flex mx-32">
        <SportComponent />
        <TicektComponent />
        <SportComponent />
      </div>
    </div>
  );
};

export default Collections;
