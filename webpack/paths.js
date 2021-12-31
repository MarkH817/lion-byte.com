const { resolve } = require('path')

const assets = resolve(__dirname, '../assets')

const paths = {
  assets,
  scripts: resolve(assets, './scripts'),
  styles: resolve(assets, './styles'),
  dist: resolve(__dirname, '../dist/assets')
}

module.exports = paths
