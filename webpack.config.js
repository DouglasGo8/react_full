"use strict";
const webpack = require('webpack');
const path = require('path');
//const loadersConf = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "4200";

module.exports = {
  entry: [
    // POLYFILL: Set up an ES6-ish environment
    // 'babel-polyfill',  // The entire babel-polyfill
    // Or pick es6 features needed (included into babel-polyfill)
    'core-js/fn/promise',
    'core-js/es6/object',
    'core-js/es6/array',

    './src/index.jsx', // your app's entry point
  ],
  devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)?$/,
      include: path.resolve(__dirname, 'src'),
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        plugins: ['react-hot-loader/babel'],
      }},
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, "src"),
      path.join(__dirname, "node_modules"), // the old 'fallback' option (needed for npm link-ed packages)
    ],
    //alias: {
      //"styles": path.resolve(__dirname, 'styles/'),
    //}
  },
  devServer: {
    contentBase: "./dist",
    // do not print bundle build stats
    noInfo: true,
    // enable HMR
    hot: true, //Can throws error with recursivity props
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: PORT,
    host: HOST
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new ExtractTextPlugin({
    //  filename: 'style.css',
    //  allChunks: true
    //}),
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      files: {
        //css: ['style.css'],
        js: [ "bundle.js"],
      }
    }),
  ]
};
