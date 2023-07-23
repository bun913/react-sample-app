import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import { Hello } from "./components/Hello";
import reportWebVitals from "./reportWebVitals";
import { Page } from "./components/ContenxtSample";
import { Counter } from "./components/useState";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Page />
    <Counter initialValue={0} />
  </React.StrictMode>
);

reportWebVitals();
