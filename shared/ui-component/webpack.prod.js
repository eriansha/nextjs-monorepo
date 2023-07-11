const path = require("path");
const autoprefixer = require('autoprefixer')
// const webpack = require('webpack');
// const nodeExternals = require('webpack-node-externals');

module.exports = function(_env, argv) {
  const isProduction = argv.node === "production";
  const isDevelopment = !isProduction;

  return {
    // enables source-map generation in development mode
    // devtool: isDevelopment && "cheap-module-source-map",
    entry: {
      index: { import: "./src/index.js" }
    },
    // target: 'node',
    // externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
    // externals: [nodeExternals()], // in order to ignore all modules in node_modules folder,
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.(scss)$/,
          use: [
            {
              // Adds CSS to the DOM by injecting a `<style>` tag
              loader: "style-loader",
            },
            {
              // Interprets `@import` and `url()` like `import/require()` and will resolve them
              loader: 'css-loader'
            },
            {
              // Loader for webpack to process CSS with PostCSS
              loader: 'postcss-loader',
              options: {
                // `postcssOptions` is needed for postcss 8.x;
                // if you use postcss 7.x skip the key
                postcssOptions: {
                  // postcss plugins, can be exported to postcss.config.js
                  plugins: () => [
                    autoprefixer
                  ]
                }
              }
            },
            {
              // Loads a SASS/SCSS file and compiles it to CSS
              loader: 'sass-loader'
            }
          ]
        }
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all',
    //   },
    // },
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
    },
    // plugins: [
    //   // Ignore the document object on the server-side
    //   new webpack.DefinePlugin({
    //     'typeof document': JSON.stringify('undefined'),
    //   }),
    // ],
    output: {
      globalObject: 'this',
      filename: "ui.bundle.min.js",
      //filename: '[name].js',
      path: path.resolve(__dirname, "dist"),
      // Below two important lines!
      library: 'sharedUIComponent',
      libraryTarget: 'umd',
    },
  };
}
