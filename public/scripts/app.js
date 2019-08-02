"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.state = {
      title: "Indecision App",
      subtitle: "Put your life in the hands of a computer!",
      options: props.options
    };

    _this.removeAll = _this.removeAll.bind(_this);
    _this.addOption = _this.addOption.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.removeOption = _this.removeOption.bind(_this);
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("Component Did Mount");

      try {
        console.log("Fetching data...");
        var options = JSON.parse(localStorage.getItem("options"));
        if (options) this.setState(function () {
          return { options: options };
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      console.log("Component Did Update P.1 ", prevProps, prevState);
      console.log("Component Did Update P.2", this.props, this.state);

      //we have acess to [this.props + this.state]
      if (prevState.options.length != this.state.options.length) {
        console.log("Saving Data...");
        var options = JSON.stringify(this.state.options);
        localStorage.setItem("options", options);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("Component Will Un-Mount");
    }
  }, {
    key: "removeAll",
    value: function removeAll() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: "addOption",
    value: function addOption(newOption) {
      if (!newOption) {
        return "Enter a valid value to add item";
      } else if (this.state.options.indexOf(newOption) > -1) {
        return "Item already exists";
      }

      this.setState(function (prevState) {
        return {
          options: [].concat(_toConsumableArray(prevState.options), [newOption])
        };
      });
    }
  }, {
    key: "removeOption",
    value: function removeOption(option) {
      console.log(option);

      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (item) {
            return item !== option;
          })
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];

      console.log(option);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Header, null),
        React.createElement(Action, {
          hasOptions: this.state.options.length !== 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          removeAll: this.removeAll,
          removeOption: this.removeOption
        }),
        React.createElement(AddOption, { addOption: this.addOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: ["Option Alex", "Option Maria", "Option Spiros", "Option Melinaa"]
};

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      " ",
      props.title,
      " "
    ),
    props.subtitle && React.createElement(
      "h2",
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: "Indecision"
};

var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { disabled: !props.hasOptions, onClick: props.handlePick },
      "What should i do?"
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    !props.options.length && React.createElement(
      "p",
      null,
      " Please add some new options "
    ),
    React.createElement(
      "ol",
      null,
      props.options.map(function (element, index) {
        return React.createElement(Option, {
          key: index,
          data: element,
          removeOption: props.removeOption
        });
      })
    ),
    React.createElement(
      "button",
      { onClick: props.removeAll },
      " Remove All"
    )
  );
};

var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "li",
      { style: { fontWeight: "bold" } },
      props.data,
      React.createElement(
        "button",
        { onClick: function onClick(e) {
            return props.removeOption(props.data);
          } },
        "Remove"
      )
    ),
    React.createElement("br", null)
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.state = {
      error: undefined
    };

    _this2.onFormSubmit = _this2.onFormSubmit.bind(_this2);
    return _this2;
  }

  _createClass(AddOption, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();

      /* Get the input value */
      var inputValue = e.target.elements.input.value.trim();

      //empty string is falsy value
      var error = this.props.addOption(inputValue);
      this.setState(function () {
        return { error: error };
      });

      if (!error) e.target.elements.input.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.onFormSubmit },
          React.createElement(
            "label",
            null,
            React.createElement(
              "h3",
              null,
              "Option: "
            ),
            React.createElement("input", { type: "text", name: "input" })
          ),
          React.createElement(
            "button",
            null,
            " Add Option "
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, { options: ["Devils den", "Second Disctrict"] }), document.getElementById("app"));
