console.log("App is running!");

// JSX - Javascript XML
// var template = React.createElement("h2", { id: "5"  }, " REACT bobs ");

/* Data */
const app = {
  title: "Indecesion App",
  subtitle: "Put your life in your hands",
  options: ["Alex", "Franchisco"]
};

const user = {
  name: "Alex Kentros",
  location: "San Franchisco",
  age: "24"
};

/* Templates */
const appTemplate = (
  <div>
    <p> {app.title.toUpperCase()} </p>
    {app.subtitle && <p> {app.subtitle} </p>}
    {renderOptions(app.options)}
  </div>
);

const userTemplate = (
  <div>
    <h1>Name: {user.name ? user.name : " Unknown "} </h1>
    {getLocation(user.location)}
    <p>Age: {user.age}</p>
  </div>
);

/* Methods */
function renderOptions(options) {
  return (
    <ol>
      {options.map((value, index) => (
        <li key={value}>{value}</li>
      ))}
    </ol>
  );
}

function getLocation(location) {
  if (location) {
    return <p> Location : {location} </p>;
  }
}

/* ReactDOM render */
var appRoot = document.getElementById("app");
var appRoot2 = document.getElementById("app2");

ReactDOM.render(appTemplate, appRoot);
ReactDOM.render(userTemplate, appRoot2);
