/* TODO: could use Commons Chunk in build config
  CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
*/
const webpack = require('webpack'),
  base = require('./webpack.base.js'),
  dev = {};

module.exports = Object.assign(base, dev);