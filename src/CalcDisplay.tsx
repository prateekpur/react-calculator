import React from "react";

import { useCalcContext } from "./CalcContext";

const CalcDisplay: React.FC = () => {
  const { result } = useCalcContext();

  return <input type="text" className="result" value={result}></input>;
};

export default CalcDisplay;
