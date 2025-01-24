import React from "react";
// import "./index.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function ReactRedux() {
  const dispatch = useDispatch();
  const value = useSelector((state) => {
    return state.value;
  });
  console.log(value);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: "incriment",
          });
        }}
      >
        incriment
      </button>
      <h3>{value}</h3>
      <button
        onClick={() => {
          dispatch({
            type: "decriment",
          });
        }}
      >
        decriment
      </button>
    </div>
  );
}

export default ReactRedux;
