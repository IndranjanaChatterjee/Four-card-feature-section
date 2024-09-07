import React from "react";
import sup from "../images/icon-supervisor.svg";
import cal from "../images/icon-calculator.svg";
import karma from "../images/icon-karma.svg";
import team from "../images/icon-team-builder.svg";

export default function Box() {
  return (
    <section className="flex flex-row justify-center items-center flex-wrap gap-4 sm:w-[95vw] h-full ">
      <div className=" h-full">
        <div className="rounded shadow-xl translate-z-[2rem] shadow-[#c8d0d9] w-[17rem] sm:w-[20rem] h-[13.5rem] border-t-[4px] border-t-solid border-t-[#65d1d2] flex flex-col justify-center items-center gap-2 px-6  ">
          <h1 className="text-left text-[#545567] font-semibold w-full text-[1.2rem]">
            Supervisor
          </h1>
          <p className="text-left text-[#abaaaf]  text-[0.8rem]">
            Monitors activity to identify project roadblocks
          </p>
          <div className="w-full flex justify-end items-center mt-2">
            <img src={sup} alt="sup" className="w-[3rem]"/>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="rounded shadow-xl translate-z-[2rem] shadow-[#c8d0d9] w-[17rem] sm:w-[20rem] h-[13.5rem] border-t-[4px] border-t-solid border-t-[#dd5958] flex flex-col justify-center items-center gap-2 px-6 ">
          <h1 className="text-left text-[#545567] font-semibold w-full text-[1.2rem]">
            Team Builder
          </h1>
          <p className="text-left text-[#abaaaf] text-[0.8rem]">
            Scans our talent network to create the optimal team for your project
          </p>
          <div className="w-full flex justify-end items-center mt-2">
            <img src={team} alt="sup" className="w-[3rem]"/>
          </div>
        </div>
        <div className="rounded shadow-xl translate-z-[2rem] shadow-[#c8d0d9] w-[17rem] sm:w-[20rem] h-[13.5rem] border-t-[4px] border-t-solid border-t-[#f3af58] flex flex-col justify-center items-center gap-2 px-6 ">
          <h1 className="text-left text-[#545567] font-semibold w-full text-[1.2rem]">
          Karma
          </h1>
          <p className="text-left text-[#abaaaf] text-[0.8rem]">
          Regularly evaluates our talent to ensure quality
          </p>
          <div className="w-full flex justify-end items-center mt-2">
            <img src={karma} alt="sup" className="w-[3rem]"/>
          </div>
        </div>
      </div>
      <div>
        <div className="rounded shadow-xl translate-z-[2rem] shadow-[#c8d0d9] w-[17rem] sm:w-[20rem] h-[13.5rem] border-t-[4px] border-t-solid border-t-[#6fa7e6] flex flex-col justify-center items-center gap-2 px-6 ">
          <h1 className="text-left text-[#545567] font-semibold w-full text-[1.2rem]">
          Calculator
          </h1>
          <p className="text-left text-[#abaaaf] text-[0.8rem]">
          Uses data from past projects to provide better delivery estimates
          </p>
          <div className="w-full flex justify-end items-center mt-2">
            <img src={cal} alt="sup" className="w-[3rem]"/>
          </div>
        </div>
      </div>
    </section>
  );
}
