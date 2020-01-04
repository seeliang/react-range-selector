module.exports = {
  unmockedModulePathPatterns: [
    'node_modules/react/',
    'node_modules/enzyme/'
  ],
  collectCoverageFrom: [
    '!__tests__/exportCheck/**/*.*',
    'src/**/*.*'
  ]
};
