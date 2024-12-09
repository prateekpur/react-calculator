import React from "react";

import { BaseButton } from "./BaseButton";
import { useCalcContext } from "../context/Calculator";

export const ResultButton: React.FC = () => {
  const { displayValue, evaluateResult } = useCalcContext();
  function getRes() {
    if (displayValue === "") {
      return;
    }
    try {
      evaluateResult();
    } catch (error) {}
  }

  return <BaseButton text={"="} onClick={getRes} />;
};
