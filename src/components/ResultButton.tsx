import React from "react";

import { Button } from "./BaseButton";
import { useCalcContext } from "../context/Calculator";
import { evaluate } from "mathjs";

export const ResultButton: React.FC = () => {
  const { result, updateResult } = useCalcContext();
  function getRes() {
    if (result === "") {
      return;
    }
    try {
      const res = evaluate(result);
      updateResult(res);
    } catch (error) {}
  }

  return <Button text={"="} onClick={getRes} />;
};
