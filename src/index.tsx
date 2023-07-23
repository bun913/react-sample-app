import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import { Hello } from "./components/Hello";
import reportWebVitals from "./reportWebVitals";
import { Parent } from "./components/ContainerSample";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>
);

reportWebVitals();
