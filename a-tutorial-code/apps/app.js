class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Indecision App",
      subtitle: "Put your life in the hands of a computer!",
      options: props.options
    };

    this.removeAll = this.removeAll.bind(this);
    this.addOption = this.addOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.removeOption = this.removeOption.bind(this);
  }

  componentDidMount() {
    console.log("Component Did Mount ");

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

  removeAll() {
    this.setState(() => ({ options: [] }));
  }

  addOption(newOption) {
    if (!newOption) {
      return "Enter a valid value to add item";
    } else if (this.state.options.indexOf(newOption) > -1) {
      return "Item already exists";
    }

    this.setState(prevState => ({
      options: [...prevState.options, newOption]
    }));
  }

  removeOption(option) {
    console.log(option);

    this.setState(prevState => ({
      options: prevState.options.filter(item => item !== option)
    }));
  }
  8;

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];

    console.log(option);
  }

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
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: ["Option Alex", "Option Maria", "Option Spiros", "Option Melinaa"]
};

const Header = props => {
  return (
    <div>
      <h1> {props.title} </h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision"
};

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What should i do?
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
    {!props.options.length && <p> Please add some new options </p> }
      <ol>
        {props.options.map((element, index) => (
          <Option
            key={index}
            data={element}
            removeOption={props.removeOption}
          />
        ))}
      </ol>
      <button onClick={props.removeAll}> Remove All</button>
    </div>
  );
};

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

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();

    /* Get the input value */
    const inputValue = e.target.elements.input.value.trim();

    //empty string is falsy value
    const error = this.props.addOption(inputValue);
    this.setState(() => ({ error }));

    if (!error) e.target.elements.input.value = "";
  }

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

ReactDOM.render(
  <IndecisionApp options={["Devils den", "Second Disctrict"]} />,
  document.getElementById("app")
);
