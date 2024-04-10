import React from "react";

const Card2 = ({ page, handleNext }) => {
  return (
    <div className="perspective-2 absolute top-0 left-0">
      <div
        className={`bg-red-300 w-80 h-[500px] transition-transform duration-1000 origin-left ${
          page > 2 && "rotate-y-135"
        } ${page == 2 && "rotate-y-20"}`}
        onClick={() => {
          page > 2 && handlePrev();
        }}
      >
        <span>2</span>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Card2;
