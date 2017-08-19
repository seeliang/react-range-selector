/* TODO: 
  1.could use Commons Chunk in build config
  CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
  2.add gzip when it is necessay
  https://github.com/webpack-contrib/compression-webpack-plugin
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