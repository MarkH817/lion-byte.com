import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default {
  rootDir: path.resolve(__dirname, '../'),
  testPathIgnorePatterns: ['node_modules', '.cache', 'dist']
}
