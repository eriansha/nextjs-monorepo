const path = require("path");
const autoprefixer = require('autoprefixer')

module.exports = function(_env, argv) {
  const isProduction = argv.node === "production";
  const isDevelopment = !isProduction;

  return {
    // enables source-map generation in development mode
    // devtool: isDevelopment && "cheap-module-source-map",
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
        {
          test: /\.(scss)$/,
          use: [
            {
              // Adds CSS to the DOM by injecting a `<style>` tag
              loader: isProduction ? MiniCssExtractPlugin.loader :  "style-loader",
            },
            {
              // Interprets `@import` and `url()` like `import/require()` and will resolve them
              loader: 'css-loader'
            },
            {
              // Loader for webpack to process CSS with PostCSS
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
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
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all',
    //   },
    // },
    externals: {
      document: 'document',
    },
    output: {
      globalObject: 'this',
      filename: "ui.bundle.min.js",
      //filename: '[name].js',
      path: path.resolve(__dirname, "dist"),
      // Below two important lines!
      library: 'sharedUIComponent',
      libraryTarget: 'umd',
      // publicPath: '/static/', // adjust the public path as needed
      // chunkFilename: '[name].js',
    },
  };
}
