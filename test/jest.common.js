const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  testPathIgnorePatterns: ['node_modules', '.cache', 'dist']
}
