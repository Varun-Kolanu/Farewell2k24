import React from "react";

const Card2 = ({ page, handleNext, senior, handlePrev }) => {
  return (
    <div className={`perspective-2 ${page > 2 && "w-0 h-0"} absolute`}>
      <div
        className={` transition-all duration-1000 origin-left ${
          page > 2 && "rotate-y-135"
        } ${
          page == 2 && "rotate-y-20"
        } overflow-hidden w-80 h-[500px] relative bg-[#fce501] flex flex-col justify-around items-center`}
        onClick={() => {
          page > 2 && handlePrev();
        }}
      >
        {page == 2 && (
          <>
            <div className="text-[#fd7196] font-mono">
              <span className="font-bold text-lg"> COPS </span>{" "}
              <span> Farewell 2k24 </span>
            </div>

            <div className="pl-5 pr-3 relative mb-2">
              <div className="flex flex-col">
                <span
                  className="
                    text-[#fd7196]
                  text-4xl space-x-3 font-bold font-sans mb-1"
                >
                  The COPS award for {senior.custom_award_title}
                </span>
                <span className="text-[#fd7196] text-lg">
                  goes to <span className="font-semibold">{senior.name}</span>
                </span>
              </div>
            </div>

            <div className="w-full px-3 flex flex-col items-center justify-between relative">
              <div className="relative">
                <div className="bg-[#fc618a] w-32 h-32 rounded-full absolute -top-16 -right-16"></div>
                <div className="bg-[#fce501] w-16 h-16 rounded-bl-full absolute top-0 right-0"></div>

                <div className="bg-[#fc618a] w-16 h-16 rounded-full absolute -bottom-8 -right-8"></div>
                <div className="bg-[#fce501] w-8 h-8 rounded-tl-full absolute bottom-0 right-0"></div>

                <div className="bg-[#fc618a] w-32 h-32 rounded-full absolute -bottom-16 -left-16"></div>
                <div className="bg-[#fce501] w-16 h-16 rounded-tr-full absolute bottom-0 left-0"></div>

                <img src="/face.jpg" className="w-full h-full mb-2 z-10" />
              </div>
              <button
                onClick={handleNext}
                className="bg-[#fc618a] text-[#fce501] px-3 py-1 rounded-md w-20 h-8 m-2"
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

export default Card2;
