import React, { Component } from "react";

export default class AddOption extends Component {
  state = {
    error: undefined
  };

  onFormSubmit = e => {
    e.preventDefault();

    /* Get the input value */
    const inputValue = e.target.elements.input.value.trim();

    //empty string is falsy value
    const error = this.props.addOption(inputValue);
    this.setState(() => ({ error }));

    if (!error) e.target.elements.input.value = "";
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <label>
            <h3>Option: </h3>
            <input type="text" name="input" />
          </label>
          <button> Add Option </button>
        </form>
      </div>
    );
  }
}
