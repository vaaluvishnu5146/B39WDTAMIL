import React, { useState } from "react";

export default function Counter() {
  // VAR - GLOBAL SCOPED,
  // LET, CONST =  BLOCK SCOPE
  // TEMPORAL DEAD ZONE -  TIMER
  const [count, setCount] = useState(0);
  // ARROW
  // PURE FUNCTION
  const handleClick = (type = "") => {
    let countCopy = count;
    if (type === "decrement") {
      countCopy = countCopy - 1;
      setCount(countCopy);
    } else if (type === "increment") {
      countCopy = countCopy + 1;
      setCount(countCopy);
    } else {
      setCount(0);
    }
  };

  return (
    <section className="centered-layout">
      <div id="counter" className="counter-container">
        <button
          className="counter-button"
          onClick={() => handleClick("decrement")}
          disabled={!count}
        >
          -
        </button>
        <div className="clearfix-20"></div>
        <h1 className="counter-text">{count}</h1>
        <div className="clearfix-20"></div>
        <button
          className="counter-button"
          onClick={() => handleClick("increment")}
        >
          +
        </button>
        <button className="counter-button" onClick={handleClick}>
          R
        </button>
      </div>
    </section>
  );
}
