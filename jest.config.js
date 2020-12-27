module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json'
    }
  },
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.(ts)$': 'ts-jest'
  },
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80
    },
    coverageReporters: ['json', 'lcov', 'text', 'clover']
  }
};
