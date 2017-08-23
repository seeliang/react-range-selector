const dev = require('./webpack.dev.js'),
  prod = require('./webpack.prod.js');
let config;

console.log('\n' + 'OK, we will load config for ' + process.env.NODE_ENV + '\n'); 

if(process.env.NODE_ENV === 'prod') {
  config = prod;
}

if(process.env.NODE_ENV === 'dev') {
  config = dev;
}

if(typeof(config) !== 'object') {
  console.log('\n' + 'Oh my, we missing NODE_ENV set, that is bad' + '\n'); 
  return;
}

module.exports = config;
