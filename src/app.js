import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";

ReactDOM.render(
  <IndecisionApp options={["Devils den", "Second Disctrict"]} />,
  document.getElementById("app")
);
