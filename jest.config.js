module.exports = {
  setupFiles: ['<rootDir>/config/jest/setup.js'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTestFramework.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    [
      'node_modules',
    ].join(''),
  ],
  collectCoverageFrom: [
    'src/**/*.(ts|tsx)',
  ],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules'],
  coverageReporters: ['json', 'lcov', 'text'],
};
