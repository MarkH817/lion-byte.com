import { resolve } from 'node:path'

export default {
  rootDir: resolve(import.meta.dirname, '../'),
  testPathIgnorePatterns: ['node_modules', '.cache', 'dist']
}
