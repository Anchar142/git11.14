const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackBar = require("webpackbar");

module.exports = {
  entry: {
    index: "./src/index.js",
    one: "./src/one.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[contenthash].main.js",
  },

  plugins: [
    //配置多个应用
    new HtmlWebpackPlugin({
      //假设是前台应用入口
      title: "首页",
      filename: "index.html",
      template: "./public/index.html",
      chunks: ["index"], //chunks指定需要引入的入口模块的键名 index:"./src/index.js"
    }),
    new HtmlWebpackPlugin({
      //假设是后台应用入口one:"./src/one.js"
      title: "One",
      filename: "one.html",
      template: "./public/one.html",
      chunks: ["one"], //chunks指定需要引入的入口模块的键名 one:"./src/one.js"
    }),
    new CleanWebpackPlugin(),
    new WebpackBar(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          // options: {
          //   presets: ["@babel/preset-env", "@babel/preset-react"],
          // },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              publicPath: "./../img",
              outputPath: "img/",
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "./../fonts",
          outputPath: "fonts/",
        },
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".less", ".js", ".css"],
    alias: {
      "@": path.join(__dirname, "./src"),
    },
  },
};
