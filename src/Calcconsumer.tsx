import React, { useContext } from 'react';
import { useCalcContext } from './CalcContext';

const StringConsumer: React.FC = () => {


  const { result, updateResult } = useCalcContext();

  const handleChangeString = () => {
    updateResult('New Updated String');
  };

  return (
    <div>
      <p>Current String: {result}</p>
      <button onClick={handleChangeString}>Update String</button>
    </div>
  );
};

export default StringConsumer;
