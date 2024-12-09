import { evaluate } from "mathjs";
import React, { createContext, useContext, useState, ReactNode } from "react";

type CalcContextType = {
  displayValue: string;
  updateDisplayValue: (val: string) => void;
  evaluateResult: () => void;
};

const CalcContext = createContext<CalcContextType | undefined>(undefined);

export const useCalcContext = () => {
  const context = useContext(CalcContext);
  if (!context) {
    throw new Error("No context found");
  }
  return context;
};

type CalcProviderProps = {
  children: ReactNode;
};

const CalcProvider: React.FC<CalcProviderProps> = ({ children }) => {
  const [displayValue, setDisplayValue] = useState<string>("");

  const evaluateResult = () => {
    setDisplayValue(evaluate(displayValue));
  };
  const updateDisplayValue = (val: string) => {
    setDisplayValue(val);
  };

  return (
    <CalcContext.Provider
      value={{ displayValue, updateDisplayValue, evaluateResult }}
    >
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
