const path = require("path");

module.exports = {
  entry: {
    index: { import: "./src/index.js" }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
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
