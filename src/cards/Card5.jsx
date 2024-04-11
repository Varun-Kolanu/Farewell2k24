import React from "react";

const Card5 = ({ page, handleNext }) => {
  return (
    <div className={`perspective-5 absolute`}>
      <div
        className={`transition-all duration-1000 origin-left overflow-hidden w-80 h-[500px] relative bg-[#2f46ba] flex flex-col items-center`}
      >
        {page == 5 && (
          <>
            <div className="pt-4 relative">
              <span className="text-white text-4xl flex justify-center">
                COPS Farewell
              </span>
            </div>
            <div className="w-full h-full py-8 px-12 z-10">
              <img src="/face.jpg" className="w-full h-full" />
            </div>
            <div className="border-b-[#1ed760] border-b-[350px] border-x-[50px] w-0 h-0 border-t-0 border-x-transparent absolute bottom-14 -left-6 rotate-[30deg] z-20"></div>
            <div className="border-b-[#1ed760] border-b-[600px] border-x-[200px] w-0 h-0 border-t-0 border-x-transparent absolute -bottom-24 -left-4 rotate-[25deg]"></div>
            <div className="border-b-[#1ed760] border-b-[350px] border-x-[60px] w-0 h-0 border-t-0 border-x-transparent absolute -bottom-8 -right-20 rotate-[30deg] z-20"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card5;
