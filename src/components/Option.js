import React from "react";

const Option = props => (
  <div className="option">
      {props.index}> 
      {props.data}
      <button className="button button--link" onClick={e => props.removeOption(props.data)}>Remove</button>
  </div>
);

export default Option;
