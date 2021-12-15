/**
 * @param {string} date
 */
function isoDateFilter(date) {
  return new Date(date).toISOString()
}

module.exports = isoDateFilter
