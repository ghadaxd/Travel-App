const path = require("path");
// const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/client/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js",
    libraryTarget: "var",
    library: "app",
  },
  devServer: {
    port: 9000,
  },
  mode: "development",
  devtool: "source-map",
  stats: "verbose",
  module: {
    rules: [
      {
        test: "/.js$/",
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|ico|webmanifest|manifest)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "favicon",
        },
      },
      {
        test: /\.(jpg|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "assets",
        },
      },
      {
        test: /([a-z][0-9]{2}[a-z])\.(png)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "assets/weather_icons",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
    new CleanWebpackPlugin({
      // Simulate the removal of files
      dry: true,
      // Write Logs to Console
      verbose: true,
      // Automatically remove all unused webpack assets on rebuild
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
    }),
  ],
};
