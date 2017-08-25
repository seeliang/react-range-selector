const path =  require('path');
module.exports = {
  entry: {
    app: './src/js/app.js'
  },

  externals: {
    'axios': 'axios',
    'react': 'React',
    'react-redux': 'ReactRedux',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM',
    'redux': 'Redux'
    //NOTE: redux thunk is tiny
  },

  module: {
    rules: [{
      test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
      loader: 'babel-loader'
    }]
  },

  output: {
    path: (path.join(__dirname,'/dist/js')),
    publicPath:'dist/js',
    filename: '[name].js'
  },

  resolve: {
    modules: [
      'node_modules'
    ]
  }
};
