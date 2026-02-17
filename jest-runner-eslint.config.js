import path from 'node:path'

export default {
  cliOptions: {
    ignorePath: path.resolve(import.meta.dirname, './.gitignore')
  }
}
