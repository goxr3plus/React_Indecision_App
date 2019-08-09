import React from "react";

const Option = props => (
  <div>
    <li style={{ fontWeight: "bold" }}>
      {props.data}
      <button onClick={e => props.removeOption(props.data)}>Remove</button>
    </li>
    <br />
  </div>
);

export default Option;
