import React, { useEffect, useState } from "react";
import Card1 from "./cards/Card1";
import Card2 from "./cards/Card2";
import Card3 from "./cards/Card3";
import Card4 from "./cards/Card4";
import Card5 from "./cards/Card5";
import "./App.css";

const App = () => {
  const [page, setPage] = useState(1);

  const handleNext = () => {
    if (page < 5) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const cards = [
    <Card1 page={page} setPage={setPage} />,
    <Card2 page={page} setPage={setPage} />,
    // <Card3 page={page} setPage={setPage} />,
    // <Card4 page={page} setPage={setPage} />,
    // <Card5 page={page} setPage={setPage} />,
  ];

  useEffect(() => {}, [page]);

  return (
    <main>
      <div id="book" className="">
        {cards}
      </div>
    </main>
  );
};

export default App;
