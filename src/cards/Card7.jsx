import React from "react";
import { FaApple, FaAndroid } from "react-icons/fa";

const Card7 = ({ page, handleNext, handlePrev }) => {
  return (
    <div className={`perspective-1 ${page > 7 && "w-0 h-0"} absolute`}>
      <div
        className={` transition-all duration-1000 origin-left overflow-hidden w-80 h-[500px] relative bg-[#f95d42] flex flex-col justify-center items-center`}
        onClick={() => {
          page > 7 && handlePrev();
        }}
      >
        {page == 7 && (
          <>
            <div className="p-9 ">
              <div className="text-3xl space-x-3 font-bold font-sans z-10 relative ">
                <span
                  className="
                  text-[#c5efc9]
                  relative -left-3
                  [word-spacing:5px]"
                >
                  Unlock the magical surprise with your invitation!
                </span>
              </div>
            </div>

            <div className="w-full flex justify-between px-2 py-3 underline mt-2 text-xl text-[#c5efc9]">
              <a href="" className="flex items-center">
                <FaApple className="inline-block text-2xl" />
                <span>iOS</span>
              </a>
              <a href="">
                <FaAndroid className="inline-block text-2xl mr-1" />
                Android
              </a>
            </div>

            <ol className="text-[#c5efc9]">
              <li>1. Download and install the app</li>
              <li>2. Open & scan your invitation</li>
              <li>3. Enjoy the Surprise!</li>
            </ol>

            <div className="absolute bottom-4 text-[#c5efc9] font-sans">
              <span className="font-bold text-lg"> COPS </span>{" "}
              <span> Farewell 2k24 </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card7;
