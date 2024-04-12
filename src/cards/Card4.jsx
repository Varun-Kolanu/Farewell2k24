import React from "react";
import { IoOpenOutline } from "react-icons/io5";

const Card4 = ({ page, handleNext, handlePrev }) => {
  return (
    <div className={`perspective-4 ${page > 4 && "w-0 h-0"} absolute`}>
      <div
        className={`pt-2 transition-all duration-1000 origin-left ${
          page > 4 && "rotate-y-135"
        } ${
          page == 4 && "rotate-y-20"
        } overflow-hidden w-80 h-[500px] relative bg-[#fc618a] flex flex-col justify-start items-center`}
        onClick={() => {
          page > 4 && handlePrev();
        }}
      >
        {page == 4 && (
          <>
            <div className="text-[#fce501] font-mono">
              <span className="font-bold text-lg"> COPS </span>{" "}
              <span> Farewell 2k24 </span>
            </div>
            <div className="pl-5 pr-3 relative mb-2">
              <div className="flex flex-col">
                <div className="text-4xl space-x-3 font-bold font-sans">
                  <span className="text-[#fce501]"> Address: Tanish Cafe </span>
                  <a
                    href="https://maps.app.goo.gl/ersVG3wZDZdH1WbT7"
                    className="inline-block ml-4 relative top-1 text-blue-700"
                    target="_blank"
                  >
                    <IoOpenOutline />
                  </a>
                </div>
                <span className="text-[#fce501] text-lg">
                  at 6 PM, 17 April
                </span>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="bg-[#fce501] text-[#fc618a] px-3 py-1 rounded-md w-20 h-8 m-2"
            >
              Next
            </button>

            <div className="relative w-full h-full">
              <img
                src="/face.jpg"
                className="rounded-t-full w-[500px] h-full absolute bottom-0"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card4;
