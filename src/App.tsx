import React from 'react';
import CalcDisplay from './CalcDisplay';
import CalcShow from './CalcShow';
import { CalcProvider } from './CalcContext';

const App: React.FC = () => {
  return (
    <CalcProvider>
      <div style={{ padding: '20px', textAlign: 'center', width: '100vw' , justifyContent: "center", alignItems: "center"}}>
        <CalcDisplay />
        <CalcShow />
      </div>
    </CalcProvider>
  );
};

export default App;
