"use client";

import { useCalcContext } from "./CalcContext";

function Result() {
  const resultStyle = {
    fontSize: "20px",
    margin: "5px",
    padding: "10px 20px",
    border: "px solid #BF4F74",
    borderRadius: "5px",
    color: "red",
    cursor: "pointer",
  };

  const resultStyle1 = {
    color: "white",
    background: "#1c191c",
    lineHeight: "130px",
    fontSize: "20px",
    flex: 1,
  };

  const { result, updateResult } = useCalcContext();

  return (
    <div>
      <h1 style={resultStyle1}>{result}</h1>
    </div>
  );
}

export default Result;
