import React from "react";

const Action = props => (
  <div className="action">
    <button
      disabled={!props.hasOptions}
      onClick={props.handlePick}
      className="big-button"
    >
      What should i do?
    </button>
  </div>
);

export default Action;
