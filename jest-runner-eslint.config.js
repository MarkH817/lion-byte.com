import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default {
  cliOptions: {
    ignorePath: path.resolve(__dirname, './.gitignore')
  }
}
