/* 
  by using react devtool, you may not need source mapping
*/
const webpack = require('webpack'),
  base = require('./webpack.base.js'),
  dev = {
    devtool: 'eval'
  };

module.exports = Object.assign(base, dev);