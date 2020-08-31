const { format } = require('date-fns')

/**
 * @param {string} date
 */
function dateFilter (date) {
  return format(new Date(date), 'MMMM d, yyyy')
}

module.exports = dateFilter
