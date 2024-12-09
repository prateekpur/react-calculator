import React from "react";

import { BaseButton } from "./BaseButton";
import { useCalcContext } from "../context/Calculator";

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

  return <BaseButton text={text} onClick={handleClick} />;
};
