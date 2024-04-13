import React from "react";

const Card2 = ({ page, handleNext, senior, handlePrev }) => {
  return (
    <div
      className={`perspective-2 ${
        page > 2 && "w-0 h-0"
      } absolute cursor-default`}
      onClick={() => page <= 2 && handleNext()}
    >
      <div
        className={` transition-all duration-1000 origin-left ${
          page > 2 && "rotate-y-135"
        } ${
          page == 2 && "rotate-y-20"
        } overflow-hidden w-72 h-[500px] relative bg-[#fce501] flex flex-col justify-around items-center`}
        onClick={() => {
          page > 2 && handlePrev();
        }}
      >
        {page == 2 && (
          <>
            <div className="pl-5 pr-3 relative mb-2">
              <div className="flex flex-col">
                <div className="text-lg text-[#fc618a] font-sans space-x-1">
                  The results are just in! The COPS Award in category
                </div>
                <div className="text-[#fd7196] text-5xl space-x-3 font-bold font-sans mb-1 flex content-center">
                  {senior.custom_award_title}
                </div>
                <span className="text-[#fd7196] text-lg">
                  goes to none other than{" "}
                  <div className="font-semibold text-4xl">{senior.name}</div>
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

                <img src="/award.jpg" className="w-full mb-2 z-10 h-full" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card2;
