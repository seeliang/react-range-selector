const webpack = require('webpack'),
  path =  require('path'),
  CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  entry: {
    app: './assets/js/src/app.js',
  },

  externals: {
      'React': 'react',
      'render': 'react-dom'
  },

  module: {
    rules: [{
      test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
      loader: 'babel-loader'
      }],
  },

  output: {
    path: (path.join(__dirname,'/build/js')),
    publicPath:'build/js',
    filename: 'react-range-selector.js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({ output: {comments: false}})
  ],

  resolve: {
    modules: [
      'node_modules'
    ]
  }

};
