const webpack = require('webpack'),
  path =  require('path'),
  CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
  // TODO: build set
module.exports = {
  entry: {
    app: './src/plugin-set/app.js'
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },

  module: {
    rules: [{
      test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
      loader: 'babel-loader'
      }]
  },

  output: {
    path: (path.join(__dirname,'/build/js')),
    publicPath:'build/js',
    filename: 'react-range-selector.js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      comments: false
    })
  ],

  resolve: {
    modules: [
      'node_modules'
    ]
  }

};
