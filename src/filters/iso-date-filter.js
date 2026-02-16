/**
 * @param {string} date
 */
function isoDateFilter(date) {
  return new Date(date).toISOString()
}

export default isoDateFilter
