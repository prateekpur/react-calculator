import React, { useState, ReactNode } from 'react';
import { CalcContext } from './CalcContext';

interface CalcProviderProps {
  children: ReactNode;
}

export const CalcProvider: React.FC<CalcProviderProps> = ({ children }) => {
  const [result, setResult] = useState("");

  const updateResult = (newString: string) : void => {
    setResult(newString);
  };

  return (
    <CalcContext.Provider value={{ result, updateResult }}>
      {children}
    </CalcContext.Provider>
  );
};
