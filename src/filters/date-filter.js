const { format } = require('date-fns')

/**
 * @param {string} date
 */
function dateFilter (date) {
  const d = new Date(date)
  d.setDate(d.getDate() + 1)
  return format(d, 'MMMM d, yyyy')
}

module.exports = dateFilter
