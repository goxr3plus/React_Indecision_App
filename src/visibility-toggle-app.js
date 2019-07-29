let state = {
  visibility: false
};

/* ----------------- Methods ----------------- */

const toggleText = () => {
  state.visibility = !state.visibility;

  render();
};

/* ----------------- Render ----------------- */

const render = () => {
  /* ----------------- Template ----------------- */
  const jsx = (
    <div>
      <h1> Visibility Toggle </h1>
      <button onClick={toggleText}>
        {!state.visibility ? " Show details" : " Hide details"}
      </button>
      {state.visibility && <p> HIIIIIII here you can find more details </p>}
    </div>
  );

  /* ReactDOM render */
  ReactDOM.render(jsx, document.getElementById("app"));
};

render();
