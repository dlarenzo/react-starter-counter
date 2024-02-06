import React, { useState } from "react";
import "./counter.css";

//  INCREASE AND DECREASE COUNTER FUNCTION

const Counter = () => {
  const [count, setCount] = useState(0);

  // HANDLE INCREMENT OF COUNTER
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  //  HANDLE DECREMENT OF COUNTER
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="container">
      <div>
        <button className="btn btn-3" onClick={handleDecrement}>
          Minus 1
        </button>
        <button className="btn btn-2" onClick={handleIncrement}>
          Add 1
        </button>

        <h3 className="counter">Count is {count} </h3>
        <button
          className="btn btn-3"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset Counter
        </button>
      </div>
    </div>
  );
};

//  EXPORT COUNTER

export default Counter;
