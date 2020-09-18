const { format } = require('date-fns')

/**
 * @param {string} date
 */
function dateFilter (date) {
  return format(new Date(date), 'MMMM dd, yyyy')
}

module.exports = dateFilter
