import React, { ChangeEvent, KeyboardEvent, useCallback } from "react";

import { useCalcContext } from "../context/Calculator";

const CalculatorDisplay: React.FC = () => {
  const { displayValue, updateDisplayValue, evaluateResult } = useCalcContext();

  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => updateDisplayValue(e.target.value),
    [updateDisplayValue]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        evaluateResult();
      }
    },
    [evaluateResult]
  );

  return (
    <input
      className="result"
      onChange={onInputChange}
      onKeyDown={onKeyDown}
      value={displayValue}
    ></input>
  );
};

export default CalculatorDisplay;
