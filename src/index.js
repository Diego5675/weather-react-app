import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ForecastProvider } from "context/ForecastContext";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ForecastProvider>
      <App />
    </ForecastProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
