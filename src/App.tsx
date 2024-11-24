import React from 'react';
import CalcDisplay from './CalcDisplay';
import CalcShow from './CalcShow';
import { CalcProvider } from './CalcContext';

const App: React.FC = () => {
  return (
    <CalcProvider>
      <div style={{ padding: '20px', textAlign: 'center', width: '100vw'}}>
        <h1>React Context with TypeScript</h1>
        <CalcDisplay />
        <CalcShow />
      </div>
    </CalcProvider>
  );
};

export default App;
