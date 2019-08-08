const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  //Customize the behaviour of webpack when it loads a specific file
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  // show original source code so we don't get lost inside bundle.js when errors happen
  devtool: "cheap-module-eval-source-map",
  // use dev server
  devServer: {
    contentBase: path.join(__dirname, "public")
  }
};
