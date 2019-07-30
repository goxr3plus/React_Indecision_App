class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: false
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState(prevState => {
      return { visibility: !prevState.visibility };
    });
  }

  render() {
    return (
      <div>
        <h1> Visibility Toggle </h1>
        <button onClick={this.toggleVisibility}>
          {!this.state.visibility ? " Show details" : " Hide details"}
        </button>
        {this.state.visibility && (
          <p> HIIIIIII here you can find more details </p>
        )}
      </div>
    );
  }
}


ReactDOM.render(<VisibilityToggle>  </VisibilityToggle>,document.getElementById("app"))
