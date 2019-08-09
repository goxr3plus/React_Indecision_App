import React from "react";

const Action = props => (
  <div>
    <button disabled={!props.hasOptions} onClick={props.handlePick} className="big-button">
      What should i do?
    </button>
  </div>
);

export default Action;
