class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count
    };

    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    console.log("Entered componentDidMount");

    try {
      console.log("Fetching data...");

      // We are getting string from localStorage
      const stringCount = localStorage.getItem("count");
      const count = parseInt(parseInt(stringCount), 10);

      // If it's a number
      if (!isNaN(count)) {
        this.setState(() => ({ count: count }));
      }
    } catch (err) {
      console.log(err);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Entered ComponentDidUpdate");

    //Save only if different
    if (prevState.count !== this.state.count) {
      console.log("Saving counter...");
      localStorage.setItem("count", this.state.count);
    }
  }

  addOne() {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  }

  minusOne() {
    this.setState(prevState => {
      return { count: prevState.count - 1 };
    });
  }

  reset() {
    this.setState(() => {
      return { count: 0 };
    });
  }

  render() {
    return (
      <div>
        <h1> Count : {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0
};

ReactDOM.render(<Counter count={-10} />, document.getElementById("app"));
