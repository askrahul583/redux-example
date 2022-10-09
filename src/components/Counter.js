import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <div>
      <span style={{ fontSize: "50px", fontFamily: "bold" }}>{counter}</span>
      <br />
      <button
        style={{
          padding: "10px",
          margin: "10px",
          fontSize: "20px",
          fontFamily: "bold",
        }}
        onClick={incrementHandler}
      >
        Increment
      </button>
      <button
        style={{
          padding: "10px",
          margin: "10px",
          fontSize: "20px",
          fontFamily: "bold",
        }}
        onClick={decrementHandler}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
