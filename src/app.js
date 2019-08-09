import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import "./styles/style.scss";

ReactDOM.render(
  <React.StrictMode>
    <IndecisionApp /> {/* options={["Devils den", "Second Disctrict"] */}
  </React.StrictMode>,
  document.getElementById("app")
);
