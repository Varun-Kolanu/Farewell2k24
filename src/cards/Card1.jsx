import React from "react";

const Card1 = ({ page, handleNext, handlePrev }) => {
  return (
    <div className="perspective-1 absolute">
      <div
        className={`top-0 left-0 overflow-hidden w-80 h-[500px] transition-all duration-1000 origin-left ${
          page > 1 && "rotate-y-135 bg-gray-400"
        } ${
          page == 1 && "rotate-y-20"
        } bg-[#c5efc9] relative overflow-hidden flex flex-col justify-center items-center`}
        onClick={() => {
          page > 1 && handlePrev();
        }}
      >
        {page == 1 && (
          <>
            <div className="bg-red-500 w-80 h-80 rounded-full absolute -top-28 -left-40 -z-10"></div>
            <div className="bg-red-500 w-16 h-16 rounded-bl-full absolute top-0 right-0"></div>
            <div className="bg-red-500 w-40 h-40 rounded-full absolute -bottom-12 -right-28"></div>

            <div className="pr-9 pl-12">
              <div className="text-5xl space-x-3 font-bold font-mono z-10 relative top-2 left-2">
                <span className="text-[#c5efc9]">Ar</span>
                <span
                  className={`${
                    page == 1 ? "text-red-500" : "text-transparent"
                  } relative -left-3`}
                >
                  e You Ready To Dive Into Nostalgia?
                </span>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="bg-red-500 text-white px-3 py-1 rounded-md relative top-6"
            >
              Open
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card1;
