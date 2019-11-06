module.exports = {
    displayName: "server",
    preset: 'ts-jest',
    collectCoverage: true,
    testEnvironment: 'node',
    transform: {
      '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/'
    },
    testRegex: [
      'tests'
    ],
    testPathIgnorePatterns: [
      '/node_modules/',
      'client',
      'dist'
    ],
    moduleFileExtensions: [
      'ts',
      'tsx',
      'js',
      'jsx'
    ]
  };