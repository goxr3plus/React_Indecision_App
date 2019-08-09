import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import "normalize.css/normalize.css";
import "./styles/style.scss";

ReactDOM.render(
  <React.StrictMode>
    <IndecisionApp />
  </React.StrictMode>,
  document.getElementById("app")
);
