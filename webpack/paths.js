import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const assets = resolve(__dirname, '../src-app')

const paths = {
  assets,
  scripts: resolve(assets, './scripts'),
  styles: resolve(assets, './styles'),
  dist: resolve(__dirname, '../dist/assets')
}

export default paths
