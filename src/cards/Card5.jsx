import React from "react";

const Card5 = ({ page, handleNext, handlePrev }) => {
  return (
    <div className={`perspective-5 ${page > 5 && "w-0 h-0"} absolute`}>
      <div
        className={`transition-all duration-1000 origin-left ${
          page > 5 && "rotate-y-135"
        } ${
          page == 5 && "rotate-y-20"
        } overflow-hidden w-80 h-[500px] relative bg-[#2f46ba] flex flex-col items-center z-40`}
        onClick={() => {
          page > 5 && handlePrev();
        }}
      >
        {page == 5 && (
          <>
            <div className="pt-4 relative">
              <span className="text-white text-4xl flex justify-center">
                COPS Farewell
              </span>
            </div>
            <div className="w-full h-full z-30 flex flex-col items-center">
              <img src="/face.jpg" className="w-full h-[80%] py-8 px-12 z-20" />
              <span className="flex justify-center z-30 pl-4 pr-1 text-[#2f46ba] font-bold text-lg relative -top-3">
                Do not forget to carry your invite! The dress code is
                traditionals.
              </span>
            </div>
            <button
              onClick={handleNext}
              className="bg-[#2f46ba] text-[#1ed760] px-3 py-1 rounded-md w-20 h-8 absolute bottom-3 z-30"
            >
              Next
            </button>
            <div className="border-b-[#1ed760] border-b-[350px] border-x-[50px] w-0 h-0 border-t-0 border-x-transparent absolute bottom-14 -left-6 rotate-[30deg] z-30"></div>
            <div className="border-b-[#1ed760] border-b-[600px] border-x-[200px] w-0 h-0 border-t-0 border-x-transparent absolute -bottom-24 -left-4 rotate-[25deg]"></div>
            <div className="border-b-[#1ed760] border-b-[350px] border-x-[60px] w-0 h-0 border-t-0 border-x-transparent absolute -bottom-8 -right-20 rotate-[30deg] z-20"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card5;
