const base = require('./webpack.base.js'),
  dev = {
    devServer: {
      historyApiFallback: true
    }
  };

module.exports = Object.assign(base,dev);
