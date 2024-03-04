// Generated using webpack-cli https://github.com/webpack/webpack-cli
const HtmlWebpackPlugin = require("html-webpack-plugin");
const env_config = require("dotenv").config();
const path = require("path");
const { loader } = require("mini-css-extract-plugin");

const environment = process.env.NODE_ENV || "production";
console.log("node process env", process.env.NODE_ENV);

const port = process.env.PORT || 3000;
console.log("port: ", port);

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name]_bundle.js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    open: true,
    port: port,
  },
  mode: environment,
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [loader, "css-loader"],
      },
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};

module.exports = config;
