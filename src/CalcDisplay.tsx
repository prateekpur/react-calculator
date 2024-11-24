import React from 'react';
import { useCalcContext } from './CalcContext';

const CalcDisplay: React.FC = () => {
  const { result } = useCalcContext();

  return <input type='text' value={result}></input>;
};

export default CalcDisplay;
