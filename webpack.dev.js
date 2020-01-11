const base = require('./webpack.base.js');

module.exports = Object.assign(base , {devServer: {
  historyApiFallback: true
}});
