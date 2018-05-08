'use strict';

require('dotenv').config({ path: `${__dirname}/.dev.env` });
const production = process.env.NODE_ENV === 'production';

const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle-[hash].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlPlugin({template: `${__dirname}/src/index.html`}),
    new ExtractTextPlugin('bundle-[hash].css'),
  ],
  devServer: {
    historyApiFallback: true,
  },
  devtool: production ? undefined : 'eval',
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node-modules/,
        loaders: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loaders: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
};