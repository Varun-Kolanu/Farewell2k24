import React from "react";

const Card1 = ({ page, handleNext, handlePrev }) => {
  return (
    <div className="perspective-1">
      <div
        className={`bg-gray-400 w-80 h-[500px] absolute top-0 left-0 transition-transform duration-1000 origin-left ${
          page > 1 && "rotate-y-135 text-transparent bg-gray-400"
        } ${page == 1 && "rotate-y-20"}`}
        onClick={() => {
          page > 1 && handlePrev();
        }}
      >
        <span>1</span>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Card1;
