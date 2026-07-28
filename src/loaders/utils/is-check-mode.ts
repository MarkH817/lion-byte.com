let checkModeFlag: boolean | null = null
export function isCheckMode() {
  if (checkModeFlag === null) {
    checkModeFlag =
      process.argv.includes('check') || process.argv.includes('sync')
  }
  return checkModeFlag
}
