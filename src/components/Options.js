import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    {!props.options.length && <p> Please add some new options </p>}
    <div>
      {props.options.length && (
        <p>
          Options {"      "} 
          <button className="button button-link" onClick={props.removeAll}> Remove All</button>
          <button className="button button-link" onClick={props.clearLocalStorage}>Reset Defaults</button>
        </p>
      )}
    </div>
    <ol>
      {props.options.map((element, index) => (
        <Option key={index} data={element} removeOption={props.removeOption} />
      ))}
    </ol>
  </div>
);

export default Options;
