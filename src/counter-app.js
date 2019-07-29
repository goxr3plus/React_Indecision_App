let count = 0;
const addOne = e => {
  ++count;
  console.log(count);
  render();
};

const minusOne = e => {
  --count;
  console.log(count);
  render();
};

const reset = e => {
  count = 0;
  console.log("RESET");
  render();
};

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1> Count : {count}</h1>
      <button onClick={addOne} className="button">
        {" "}
        +1{" "}
      </button>
      <button onClick={minusOne} className="button">
        {" "}
        -1{" "}
      </button>
      <button onClick={reset} className="button">
        {" "}
        reset{" "}
      </button>
    </div>
  );
  console.log(template);

  ReactDOM.render(template, appRoot);
};

render();
