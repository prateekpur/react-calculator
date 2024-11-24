import React, { useContext } from 'react';
import { CalcContext } from './CalcContext';

const StringConsumer: React.FC = () => {
  const context = useContext(CalcContext);

  if (!context) {
    throw new Error('StringConsumer must be used within a StringProvider');
  }

  const { result, updateResult } = context;

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
