import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";

const sv3 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    >
      <path d="M10.165 6.598C9.954 7.478 9.64 8.36 9 9s-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402" />
      <path d="M5.341 10.62a4 4 0 1 0 5.279-5.28" />
    </g>
  </svg>
);

//PAscal Case for components
const SpecialButton = ({ text }) => {
  return (
    <button>
      {sv3}
      {text}
    </button>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
