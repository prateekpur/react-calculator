import React from "react";

import { Button } from "./Button";
import { useCalcContext } from "./CalcContext";

type ActionButtonProps = {
  text: string;
};

export const ActionButton: React.FC<ActionButtonProps> = ({ text }) => {
  const { result, updateResult } = useCalcContext();

  const handleClick = (val: string) => {
    if (typeof result === "string") {
      updateResult(result + val);
    } else {
      if (val === "+" || val === "-" || val === "*" || val === "/") {
        updateResult(result + val);
      }
    }
  };

  return <Button text={text} onClick={handleClick} />;
};
