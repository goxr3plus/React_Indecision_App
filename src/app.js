class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Indecision App",
      subtitle: "Put your life in the hands of a computer!",
      options: ["Alex", "Maria", "Spiros", "Melina"]
    };
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle} />
        <Action />
        <Options options={this.state.options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1> {this.props.title} </h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    console.log("handlePick");
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}> What should i do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);

    this.removeAll = this.removeAll.bind(this);
  }

  removeAll() {
    console.log(this.props.options);
  }

  render() {
    return (
      <div>
        <ol>
          {this.props.options.map((element, index) => (
            <Option key={index} data={element} />
          ))}
        </ol>
        <button onClick={this.removeAll}> Remove All</button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <li style={{ fontWeight: "bold" }}> {this.props.data} </li>;
  }
}

class AddOption extends React.Component {
  onFormSubmit(e) {
    e.preventDefault();

    /* Get the input value */
    const inputValue = e.target.elements.input.value.trim();

    //empty string is falsy value
    if (inputValue) {
      console.log(inputValue);
      e.target.elements.input.value = "";
    }

    render();
  }

  render() {
    return (
      <div>
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

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
