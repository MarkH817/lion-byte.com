const { createTransformer } = require('babel-jest')

const babelOptions = { presets: ['gatsby'] }

module.exports = createTransformer(babelOptions)
