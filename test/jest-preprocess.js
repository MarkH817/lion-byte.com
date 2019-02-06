const { createTransformer } = require('babel-jest')

const babelOptions = {
  presets: ['gatsby'],
  plugins: [['styled-components', { displayName: true }]]
}

module.exports = createTransformer(babelOptions)
