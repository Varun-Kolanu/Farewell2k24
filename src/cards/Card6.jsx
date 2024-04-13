import React from "react";

const Card6 = ({ page, handleNext, handlePrev }) => {
  return (
    <div
      className={`perspective-6 ${
        page > 6 && "w-0 h-0"
      } absolute cursor-default`}
      onClick={() => page <= 6 && handleNext()}
    >
      <div
        className={` transition-all duration-1000 origin-left ${
          page > 6 && "rotate-y-135"
        } ${
          page == 6 && "rotate-y-20"
        } overflow-hidden w-72 h-[500px] relative bg-[#1e1d24] flex flex-col justify-around items-center`}
        onClick={() => {
          page > 6 && handlePrev();
        }}
      >
        {page == 6 && (
          <>
            <div className="text-[#f6f5fb] font-mono">
              <span className="font-bold text-lg"> COPS </span>{" "}
              <span> Farewell 2k24 </span>
            </div>

            <div className="pl-5 pr-3 relative mb-2 -top-8">
              <div className="flex flex-col">
                <span
                  className="
                    text-[#f6f5fb]
                  text-4xl space-x-3 font-bold font-sans mb-1"
                >
                  The dress code is Black & White
                </span>
              </div>
            </div>

            <div className="w-full px-3 flex flex-col items-center justify-between relative -top-8">
              <div className="relative">
                <div className="bg-[#f6f5fb] w-32 h-32 rounded-full absolute -top-16 -right-16"></div>
                <div className="bg-[#1e1d24] w-16 h-16 rounded-bl-full absolute top-0 right-0"></div>

                <div className="bg-[#f6f5fb] w-32 h-32 rounded-full absolute -bottom-16 -left-16"></div>
                <div className="bg-[#1e1d24] w-16 h-16 rounded-tr-full absolute bottom-0 left-0"></div>

                <img
                  src="/black_and_white.jpg"
                  className="w-full h-full mb-2 z-10"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card6;
