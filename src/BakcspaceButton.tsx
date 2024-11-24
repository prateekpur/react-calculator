import React from "react";

import { Button } from "./Button";
import { useCalcContext } from "./CalcContext";

export const BakcspaceButton: React.FC = () => {
  const { result, updateResult } = useCalcContext();
  const handleDel = () => {
    if (typeof result === "string") {
      updateResult(result.slice(0, -1));
    }
  };

  return <Button text={"<-"} onClick={handleDel} />;
};
