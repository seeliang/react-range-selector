const path =  require('path');
module.exports = {
  devServer: {
    historyApiFallback: true
  },

  entry: {
    app: './src/js/app.js'
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },

  module: {
    rules: [{
      test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
      loader: 'babel-loader'
    }],
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
