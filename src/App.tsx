import React from "react";

import CalcDisplay from "./CalcDisplay";
import CalcShow from "./CalcShow";
import { CalcProvider } from "./CalcContext";

const App: React.FC = () => (
  <CalcProvider>
    <div className="container">
      <CalcDisplay />
      <CalcShow />
    </div>
  </CalcProvider>
);

export default App;
