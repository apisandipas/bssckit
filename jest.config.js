// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  verbose: false,
  testPathIgnorePatterns: ['/node_modules/'],
  reporters: ['jest-spec-reporter'],
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['./jest.setup.js'],
};
