module.exports = {
  ...require('./test/jest.common'),
  displayName: 'test',
  transform: {
    '^.+\\.(t|j)sx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '.+\\.(css|less)$': '<rootDir>/__mocks__/file-mock.js',
    '^(typeface)-[a-zA-Z-]+$': '<rootDir>/__mocks__/file-mock.js',
    // eslint-disable-next-line max-len
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js'
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  projects: ['<rootDir>', '<rootDir>/test/jest.lint.js']
}
