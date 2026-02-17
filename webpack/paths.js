import { resolve } from 'node:path'

const assets = resolve(import.meta.dirname, '../src-app')

export default {
  assets,
  scripts: resolve(assets, './scripts'),
  styles: resolve(assets, './styles'),
  dist: resolve(import.meta.dirname, '../dist/assets')
}
