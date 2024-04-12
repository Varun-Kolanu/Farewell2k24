import React from "react";

const Card6 = ({ page, handleNext, senior, handlePrev }) => {
  return (
    <div className={`perspective-6 ${page > 6 && "w-0 h-0"} absolute`}>
      <div
        className={` transition-all duration-1000 origin-left ${
          page > 6 && "rotate-y-135"
        } ${
          page == 6 && "rotate-y-20"
        } overflow-hidden w-80 h-[500px] relative bg-[#e0ff08] flex flex-col justify-around items-center`}
        onClick={() => {
          page > 6 && handlePrev();
        }}
      >
        {page == 6 && (
          <>
            <div className="text-[#a327f0] font-mono">
              <span className="font-bold text-lg"> COPS </span>{" "}
              <span> Farewell 2k24 </span>
            </div>

            <div className="pl-5 pr-3 relative mb-2">
              <div className="flex flex-col">
                <span
                  className="
                    text-[#a327f0]
                  text-4xl space-x-3 font-bold font-sans mb-1"
                >
                  The dress code is Traditionals
                </span>
              </div>
            </div>

            <div className="w-full px-3 flex flex-col items-center justify-between relative">
              <div className="relative">
                <div className="bg-[#a327f0] w-32 h-32 rounded-full absolute -top-16 -right-16"></div>
                <div className="bg-[#e0ff08] w-16 h-16 rounded-bl-full absolute top-0 right-0"></div>

                <div className="bg-[#a327f0] w-32 h-32 rounded-full absolute -bottom-16 -left-16"></div>
                <div className="bg-[#e0ff08] w-16 h-16 rounded-tr-full absolute bottom-0 left-0"></div>

                <img src="/face.jpg" className="w-full h-full mb-2 z-10" />
              </div>
              <button
                onClick={handleNext}
                className="bg-[#a327f0] text-[#e0ff08] px-3 py-1 rounded-md w-20 h-8 m-2"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card6;
