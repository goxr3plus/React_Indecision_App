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
        loader: "babel-loader" //loader allows as to give only one entry
      },
      {
        test: /\.scss$/,
        use: [  //use allows as to give an array of entries
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  // show original source code so we don't get lost inside bundle.js when errors happen
  devtool: "cheap-module-eval-source-map",
  // use dev server
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: false,
    port: 9000
  }
};
