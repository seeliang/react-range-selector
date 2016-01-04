
/*eslint-disable */
var webpack = require('webpack'),
  CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  entry: {
    app: './assets/js/src/app.js',
  },
  externals: {
      'React': 'react',
      'render': 'react-dom'
  },
  output: {
    path: ('./build/js'),
    publicPath:'build/js',
    filename: 'react-range-selector.js'
  },
  resolve: {
    modulesDirectories: [
      'node_modules'
    ]
  },
  module: {
   loaders: [{
     test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
     loader: 'babel' // The module to load. "babel" is short for "babel-loader"
   }],
   noParse: [ 'react', 'react-dom']
 },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin({ output: {comments: false}})
  ]
};
