import React, { useEffect, useState } from "react";
import Card1 from "./cards/Card1";
import Card2 from "./cards/Card2";
import Card3 from "./cards/Card3";
import Card4 from "./cards/Card4";
import Card5 from "./cards/Card5";
import "./App.css";
import CanvasBackground from "./CanvasBackground.jsx";
import Card6 from "./cards/Card6.jsx";
import Card7 from "./cards/Card7.jsx";

const App = ({ senior }) => {
  const [page, setPage] = useState(1);

  const handleNext = () => {
    if (page < 7) {
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
    <Card7
      page={page}
      handleNext={handleNext}
      handlePrev={handlePrev}
      key={7}
      senior={senior}
    />,
    <Card6
      page={page}
      handleNext={handleNext}
      handlePrev={handlePrev}
      key={6}
      senior={senior}
    />,
    <Card5
      page={page}
      handleNext={handleNext}
      handlePrev={handlePrev}
      key={5}
      senior={senior}
    />,
    <Card4
      page={page}
      handleNext={handleNext}
      handlePrev={handlePrev}
      key={4}
      senior={senior}
    />,
    <Card3
      page={page}
      handleNext={handleNext}
      handlePrev={handlePrev}
      key={3}
      senior={senior}
    />,
    <Card2
      page={page}
      handleNext={handleNext}
      handlePrev={handlePrev}
      key={2}
      senior={senior}
    />,
    <Card1
      page={page}
      handleNext={handleNext}
      handlePrev={handlePrev}
      key={1}
      senior={senior}
    />,
  ];

  useEffect(() => {}, [page]);

  return (
    <main
      className={`w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-[#1c1e1e]`}
    >
      <CanvasBackground />
      <div id="book" className="relative w-72 h-[500px] z-10">
        {cards}
      </div>
    </main>
  );
};

export default App;
