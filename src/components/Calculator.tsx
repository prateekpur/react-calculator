import React from "react";

import CalcDisplay from "./CalculatorDisplay";
import CalcShow from "../CalcShow";
import CalcProvider from "../context/Calculator";

const Calculator: React.FC = () => (
  <CalcProvider>
    <div className="container">
      <CalcDisplay />
      <CalcShow />
    </div>
  </CalcProvider>
);

export default Calculator;
