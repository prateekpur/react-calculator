import React from "react";
import { ActionButton } from "./ActionButton";
import { useCalcContext } from "./CalcContext";
import { evaluate } from "mathjs";
import { Button } from "./Button";

const CalcButtons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const Operators = ["-", "+", "*", "/"];

const CalcShow: React.FC = () => {
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

  const handleDel = () => {
    if (typeof result === "string") {
      updateResult(result.slice(0, -1));
    }
  };

  const onEnterKey = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      getRes();
    }
    if (event.key === "Backspace") {
      handleDel();
    }
  };

  return (
    <div tabIndex={0} onKeyDown={onEnterKey} className="buttonWrapper">
      {[...CalcButtons, ...Operators].map((item, index) => (
        <ActionButton text={item} key={`${item}-${index}`} />
      ))}
      <Button text="<-" onClick={handleDel} />
      <Button text="=" onClick={getRes} />
    </div>
  );
};

export default CalcShow;
