"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type CalcContextType = {
  result: string;
  updateResult: (val: string) => void;
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

export const CalcProvider: React.FC<CalcProviderProps> = ({ children }) => {
  const [result, setResult] = useState<string>("");

  const updateResult = (val: string) => {
    setResult(val);
  };

  return (
    <CalcContext.Provider value={{ result, updateResult }}>
      {children}
    </CalcContext.Provider>
  );
};
