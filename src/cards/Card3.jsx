import React from "react";

const Card3 = ({ page, handleNext }) => {
  return (
    <div className="perspective-3">
      <div
        className={`bg-green-300 w-80 h-[500px] absolute top-0 left-0 transition-transform duration-1000 origin-left ${
          page > 3 && "rotate-y-135"
        } ${page == 3 && "rotate-y-20"}`}
        onClick={() => {
          page > 3 && handlePrev();
        }}
      >
        <span>3</span>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Card3;
