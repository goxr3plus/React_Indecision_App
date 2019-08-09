import React, { Component } from "react";
import Options from "./Options";
import Header from "./Header";
import AddOption from "./AddOption";
import Action from "./Action";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends Component {
  state = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer!",
    options: this.props.options,
    modalOpened: false,
    selectedOption: undefined
  };

  /* Event Handlers */

  closeModal = () => {
    console.log("Close Modal");
    this.setState(() => ({ modalOpened: false }));
  };

  removeAll = () => {
    this.setState(() => ({ options: [] }));
  };

  addOption = newOption => {
    if (!newOption) {
      return "Enter a valid value to add item";
    } else if (this.state.options.indexOf(newOption) > -1) {
      return "Item already exists";
    }

    this.setState(prevState => ({
      options: [...prevState.options, newOption]
    }));
  };

  removeOption = option => {
    console.log(option);

    this.setState(prevState => ({
      options: prevState.options.filter(item => item !== option)
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];

    this.setState(prevState => ({
      modalOpened: !prevState.modalOpened,
      selectedOption: option
    }));
  };

  /* LifeCycle Methods */

  componentDidMount() {
    console.log("Component Did Mount ", this.instanceProperty);

    try {
      console.log("Fetching data...");
      const options = JSON.parse(localStorage.getItem("options"));
      if (options) this.setState(() => ({ options: options }));
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did Update P.1 ", prevProps, prevState);
    console.log("Component Did Update P.2", this.props, this.state);

    //we have acess to [this.props + this.state]
    if (prevState.options.length != this.state.options.length) {
      console.log("Saving Data...");
      const options = JSON.stringify(this.state.options);
      localStorage.setItem("options", options);
    }
  }

  componentWillUnmount() {
    console.log("Component Will Un-Mount");
  }

  /* Render */
  render() {
    return (
      <div>
        <Header />
        <Action
          hasOptions={this.state.options.length !== 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          removeAll={this.removeAll}
          removeOption={this.removeOption}
        />
        <AddOption addOption={this.addOption} />
        <OptionModal opened={this.state.modalOpened} close={this.closeModal}>
          {this.state.selectedOption}{" "}
        </OptionModal>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: ["Drink water", "Swim", "Do Gymnastics", "Make love", "Have fun"]
};
