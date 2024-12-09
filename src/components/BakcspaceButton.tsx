import React from "react";

import { BaseButton } from "./BaseButton";
import { useCalcContext } from "../context/Calculator";

export const BakcspaceButton: React.FC = () => {
  const { displayValue, updateDisplayValue } = useCalcContext();
  const handleDel = () => {
    if (typeof displayValue === "string") {
      updateDisplayValue(displayValue.slice(0, -1));
    }
  };

  return <BaseButton text={"<-"} onClick={handleDel} />;
};
