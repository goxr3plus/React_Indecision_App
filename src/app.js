var appRoot = document.getElementById("app");

/* ----------------- Methods ----------------- */

const onFormSubmit = e => {
  e.preventDefault();

  /* Get the input value */
  const inputValue = e.target.elements.input.value;

  //empty string is falsy value
  if (inputValue) {
    console.log(inputValue);
    app.options.push(inputValue);
    e.target.elements.input.value = "";
  }

  render();
};

const removeAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];

  // app.options.push();
  console.log(option);
  render();
};

/* ----------------- Data ----------------- */

const app = {
  title: "Indecesion App",
  subtitle: "Put your life in your hands",
  options: []
};

/* ----------------- Render ----------------- */

const render = () => {
  /* ----------------- Template ----------------- */
  const appTemplate = (
    <div>
      <p> {app.title.toUpperCase()} </p>
      {app.subtitle && <p> {app.subtitle} </p>}
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should i do?
      </button>
      {/* Render the options */}
      <ol>
        {app.options.map(value => (
          <li key={Math.random() + " " + value}>{value}</li>
        ))}
      </ol>
      <button onClick={removeAll}> Remove All </button>
      {/* Render the form */}
      <form onSubmit={onFormSubmit}>
        <label>
          Type New Option:
          <input type="text" name="input" />
        </label>
        <button> Add Option </button>
      </form>
    </div>
  );

  /* ReactDOM render */
  ReactDOM.render(appTemplate, appRoot);
};

render();
