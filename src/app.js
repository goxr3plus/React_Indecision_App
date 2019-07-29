let count = 0;
const template = (
  <div>
    <h1> Count : {count}</h1>
    <button id="my-id" className="button">
      +1
    </button>
  </div>
);
console.log(template)

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
