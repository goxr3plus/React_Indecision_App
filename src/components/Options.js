import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    {props.options.length ? (
      <div className="widget-header">
        <p className="widget-header__title">Options</p>
        <button className="button" onClick={props.removeAll}>
          Remove All
        </button>
        <button className="button" onClick={props.clearLocalStorage}>
          Reset Defaults
        </button>
      </div>
    ) : null}
    {props.options.map((element, index) => (
      <Option
        key={index}
        index={index + 1}
        data={element}
        removeOption={props.removeOption}
      />
    ))}
    {!props.options.length && (
      <p className="widget__message"> Please add option to get started! </p>
    )}
  </div>
);

export default Options;
