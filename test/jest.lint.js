import common from './jest.common.js'

export default {
  ...common,
  displayName: 'lint',
  runner: 'jest-runner-eslint',
  testMatch: ['<rootDir>/**/*.js']
}
