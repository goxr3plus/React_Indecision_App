import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    {!props.options.length && <p> Please add some new options </p>}
    <ol>
      {props.options.map((element, index) => (
        <Option key={index} data={element} removeOption={props.removeOption} />
      ))}
    </ol>
    <button onClick={props.removeAll}> Remove All</button>
  </div>
);

export default Options;
