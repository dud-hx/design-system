module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx'],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    testMatch: ['**/*.(test|spec).(ts|tsx)'],
    globals: {
      'ts-jest': {
        babelConfig: true,
        tsconfig: 'tsconfig.json',
      },
    },
  };
  