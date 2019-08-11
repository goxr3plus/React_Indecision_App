import React, { Component } from "react";

export default class AddOption extends Component {
  onFormSubmit = e => {
    e.preventDefault();

    /* Get the input value */
    const inputValue = e.target.elements.input.value.trim();

    //empty string is falsy value
    const error = this.props.addOption(inputValue);
    this.props.setError(error);

    if (!this.props.error) e.target.elements.input.value = "";
  };

  render() {
    return (
      <div>
        {this.props.error && (
          <p className="add-option-error">{this.props.error}</p>
        )}
        <form className="add-option" onSubmit={this.onFormSubmit}>
          <input
            className="add-option__input"
            type="text"
            name="input"
            placeholder="Add Option here..."
          />
          <button className="button"> Add Option </button>
        </form>
      </div>
    );
  }
}
