// https://github.com/thymikee/jest-preset-angular#brief-explanation-of-config
module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  moduleNameMapper: {
    '@shared/(.*)': '<rootDir>/src/app/shared/$1',
    '@session/(.*)': '<rootDir>/src/app/session/$1'
  },
  transformIgnorePatterns: ['node_modules/(?!(jest-test))']
};
