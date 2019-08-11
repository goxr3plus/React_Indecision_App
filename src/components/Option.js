import React from "react";

const Option = props => (
  <div className="option">
    <p className="option--text">{props.data}</p>
    <button
      className="button button--link"
      onClick={e => props.removeOption(props.data)}
    >
      Remove
    </button>
  </div>
);

export default Option;
