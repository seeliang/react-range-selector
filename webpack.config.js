
/*eslint-disable */
var webpack = require('webpack'),
  CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
module.exports = {
  entry: {
  	app: 	'./assets/js/src/app.js',
  },
  output: {
    path: ('./build/js'),
    publicPath:'build/js',
    filename: '[name]-bundle.js'
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
   }]
 },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin({ output: {comments: false}})
  ]
};
