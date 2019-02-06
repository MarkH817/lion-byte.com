module.exports = {
  ...require('./test/jest.common'),
  displayName: 'client',
  transform: {
    '^.+\\.jsx?$': '<rootDir>/test/jest-preprocess.js'
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '^(typeface)-[a-zA-Z-]+$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js'
  },
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: ''
  },
  setupFiles: ['<rootDir>/test/loadershim.js'],
  setupFilesAfterEnv: [
    'jest-dom/extend-expect',
    'react-testing-library/cleanup-after-each',
    'jest-styled-components'
  ],
  projects: ['<rootDir>', '<rootDir>/test/jest.lint.js']
}
