import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    {props.options.length ? (
      <div className="widget-header">
        <p>Options</p>
        <button className="button" onClick={props.removeAll}>
          Remove All
        </button>
        <button className="button" onClick={props.clearLocalStorage}>
          Reset Defaults
        </button>
      </div>
    ) : null}
    <ol>
      {props.options.map((element, index) => (
        <Option key={index} data={element} removeOption={props.removeOption} />
      ))}
    </ol>
    {!props.options.length && <p> Please add some new options </p>}
  </div>
);

export default Options;
