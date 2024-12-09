import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

import Calculator from "./components/Calculator";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <Calculator />
  </StrictMode>
);
