const path = require("path");

module.exports = {
  entry: {
    index: { import: "./src/index.js" }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  output: {
    globalObject: 'this',
    filename: "ui.bundle.min.js",
    path: path.resolve(__dirname, "dist"),
    // Below two important lines!
    library: 'sharedUIComponent',
    libraryTarget: 'umd'
  },
};
