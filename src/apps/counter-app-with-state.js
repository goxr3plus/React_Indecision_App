class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      props
    };

    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
  }

  addOne(e) {
    this.setState(prevState => {
      return { count: ++prevState.count };
    });
  }

  minusOne(e) {
    this.setState(prevState => {
      return { count: --prevState.count };
    });
  }

  reset(e) {
    this.setState(() => {
      return { count: 0 };
    });
  }

  render() {
    console.log(this.state);
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

ReactDOM.render(<Counter m="a" />, document.getElementById("app"));
