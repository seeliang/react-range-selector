/* TODO: 
  1.could use Commons Chunk in build config
  CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
  2.add gzip when it is necessary
  https://github.com/webpack-contrib/compression-webpack-plugin
*/
const
  base = require('./webpack.base.js'),
  prod = {
    devtool: 'nosources-source-map',
    optimization: {
      minimize: true
    }
  };

module.exports = Object.assign(base, prod);
