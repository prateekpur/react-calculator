import React from "react";

import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorKeysSection from "./CalculatorKeysSection";
import CalculatorProvider from "../context/Calculator";

const Calculator: React.FC = () => (
  <div className="container">
    <CalculatorProvider>
      <CalculatorDisplay />
      <CalculatorKeysSection />
    </CalculatorProvider>
  </div>
);

export default Calculator;
