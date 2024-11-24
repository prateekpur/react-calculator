import React, { createContext, useContext, useState } from 'react';

interface CalcContextType {
  result: string;
  updateResult: (newString: string) => void;
}
export const CalcContext = createContext<CalcContextType | undefined>(undefined);

export const CalcContextProvider = ({ children }) => {
    const [result, setResult] = useState("");
  
    return (
      <CalcContext.Provider value={{result, setResult }}>
        {children}
      </CalcContext.Provider>
    );
  };
  

export const useCalcContext = () => {
    const context = useContext(CalcContext);
    return context;
};
  