import React from "react";

const Option = props => {
  return (
    <div>
      <li style={{ fontWeight: "bold" }}>
        {props.data}
        <button onClick={e => props.removeOption(props.data)}>Remove</button>
      </li>
      <br />
    </div>
  );
};

export default Option;
