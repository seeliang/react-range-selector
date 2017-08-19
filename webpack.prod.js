/* TODO: could use Commons Chunk in build config
  CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
*/
const webpack = require('webpack'),
  base = require('./webpack.base.js'),
  prod = {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false
        }
      })
    ]
};

module.exports = Object.assign(base, prod);