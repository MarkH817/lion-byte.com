/**
 * @param {number} [ms]
 * @returns {Promise<void>}
 */
function sleep (ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default sleep
