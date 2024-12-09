import React from "react";

import { BaseButton } from "./BaseButton";
import { useCalcContext } from "../context/Calculator";

type ActionButtonProps = {
  text: string;
};

export const ActionButton: React.FC<ActionButtonProps> = ({ text }) => {
  const { displayValue, updateDisplayValue } = useCalcContext();

  const handleClick = (val: string) => {
    if (typeof displayValue === "string") {
      updateDisplayValue(displayValue + val);
    } else {
      if (val === "+" || val === "-" || val === "*" || val === "/") {
        updateDisplayValue(displayValue + val);
      }
    }
  };

  return <BaseButton text={text} onClick={handleClick} />;
};
