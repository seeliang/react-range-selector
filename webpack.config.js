const webpack = require('webpack'),
  path =  require('path');
module.exports = {
  entry: {
    index: './src/index.js'
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
    path: (path.join(__dirname,'lib/')),
    filename: '[name].js',
    libraryTarget: 'umd'
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
