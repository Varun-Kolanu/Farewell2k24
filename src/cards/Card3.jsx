import React from "react";

const Card3 = ({ page, handleNext, handlePrev }) => {
  return (
    <div
      className={`perspective-3 ${
        page > 3 && "w-0 h-0"
      } absolute cursor-default`}
      onClick={() => page <= 3 && handleNext()}
    >
      <div
        className={`py-2 transition-all duration-1000 origin-left ${
          page > 3 && "rotate-y-135"
        } ${
          page == 3 && "rotate-y-20"
        } overflow-hidden w-72 h-[500px] relative bg-red-500 flex flex-col justify-around items-center`}
        onClick={() => {
          page > 3 && handlePrev();
        }}
      >
        {page == 3 && (
          <>
            <div className="pl-5 pr-3 relative mb-2">
              <div className="flex flex-col">
                <span
                  className="
                    text-white
                  text-[2rem] space-x-3 font-bold font-sans"
                >
                  In your honour, we have decided to host a dinner
                </span>
              </div>
            </div>

            <div className="w-full h-full flex justify-center items-center relative">
              <img
                src="/dinner.jpg"
                className="rounded-full w-64 h-64 shadow-md shadow-white z-10 absolute"
              />
              <img
                src="/dinner.jpg"
                className="rounded-full w-56 h-56 shadow-md shadow-white z-20 absolute"
              />
              <img
                src="/dinner.jpg"
                className="rounded-full w-48 h-48 shadow-md shadow-white z-30 absolute"
              />
            </div>

            <div className="text-white font-mono">
              <span className="font-bold text-lg"> COPS </span>{" "}
              <span> Farewell 2k24 </span>
            </div>

            <div className="rounded-full border-white w-12 h-12 border-2 absolute -right-6 -bottom-6"></div>
            <div className="rounded-full border-white w-16 h-16 border-2 absolute -right-8 -bottom-8"></div>
            <div className="rounded-full border-white w-20 h-20 border-2 absolute -right-10 -bottom-10"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card3;
