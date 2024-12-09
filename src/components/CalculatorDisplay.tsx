import React from "react";

import { useCalcContext } from "../context/Calculator";

const CalculatorDisplay: React.FC = () => {
  const { result } = useCalcContext();

  return <input className="result" value={result}></input>;
};

export default CalculatorDisplay;
