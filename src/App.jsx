import React, { useEffect, useState } from "react";
import Card1 from "./cards/Card1";
import Card2 from "./cards/Card2";
import Card3 from "./cards/Card3";
import Card4 from "./cards/Card4";
import Card5 from "./cards/Card5";
import "./App.css";
import CanvasBackground from "./CanvasBackground";

const App = () => {
  const [page, setPage] = useState(1);

  const handleNext = () => {
    if (page < 5) {
      console.log("next");
      setPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const cards = [
    <Card5
      page={page}
      handleNext={handleNext}
      handlePrev={handlePrev}
      key={5}
    />,
    <Card4
      page={page}
      handleNext={handleNext}
      handlePrev={handlePrev}
      key={4}
    />,
    <Card3
      page={page}
      handleNext={handleNext}
      handlePrev={handlePrev}
      key={3}
    />,
    <Card2
      page={page}
      handleNext={handleNext}
      handlePrev={handlePrev}
      key={2}
    />,
    <Card1
      page={page}
      handleNext={handleNext}
      handlePrev={handlePrev}
      key={1}
    />,
  ];

  useEffect(() => {}, [page]);

  return (
    <main
      className={`w-[100vw] h-[100vh] flex flex-col justify-center items-center`}
    >
      <CanvasBackground />
      {page > 1 && (
        <button
          onClick={handlePrev}
          className="bg-gray-500 text-white px-3 py-1 rounded-md relative -top-6"
        >
          Previous
        </button>
      )}
      <div id="book" className="relative w-80 h-[500px]">
        {cards}
      </div>
    </main>
  );
};

export default App;
