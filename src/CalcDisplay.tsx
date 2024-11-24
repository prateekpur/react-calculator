import React from 'react';
import { useCalcContext } from './CalcContext';

const CalcDisplay: React.FC = () => {
  const { result } = useCalcContext();

  return <p>Current value: {result}</p>;
};

export default CalcDisplay;
