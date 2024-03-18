import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {
  return (
    <div className="w-full h-screen-full bg-zinc-900 p-1">
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <h1 className="font-['Founders_Grotesk_Condensed'] uppercase text-9xl  leading-[7.5vw] tracking-tighter font-medium ">
                {item}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center px-20 py-5">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none ">
            {item}
          </p>
        ))}

        <div className="start flex gap-3">
          <div className="px-5 py-2 border-[1px] border-zinc-600 rounded-full font-light text-md uppercase">
            Our Works
          </div>
          <div className="w-10 h-10 border-[1px] border-zinc-600 rounded-full flex justify-center items-center">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
