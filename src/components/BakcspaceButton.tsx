import React from "react";

import { BaseButton } from "./BaseButton";
import { useCalcContext } from "../context/Calculator";

export const BakcspaceButton: React.FC = () => {
  const { result, updateResult } = useCalcContext();
  const handleDel = () => {
    if (typeof result === "string") {
      updateResult(result.slice(0, -1));
    }
  };

  return <BaseButton text={"<-"} onClick={handleDel} />;
};
