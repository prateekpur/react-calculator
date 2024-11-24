"use client";
import React from "react";
import { Button } from "./Button";
import { useCalcContext } from "./CalcContext";
import { text } from "stream/consumers";

type ActionButtonProps = {
    text: string;
};

export const ActionButton: React.FC<ActionButtonProps> = ({ text}) => {
  const { result, updateResult } = useCalcContext();
  const handleClick = (val: string) => {
     if (typeof val === "number") {
      console.log("into if block");
      if (val === "+" || val === "-" || val === "*" || val === "/") {
        updateResult(result + val);
      }
    } else {
      updateResult((result + val));
    }
  };

  return (
    <Button text={text} onClick={handleClick} />    
  );
};
