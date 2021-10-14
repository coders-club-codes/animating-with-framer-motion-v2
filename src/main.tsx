import { StrictMode } from "react";
import { render } from "react-dom";
import "./main.css";

import App from "./App";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
