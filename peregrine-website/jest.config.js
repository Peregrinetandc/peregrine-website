module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
};