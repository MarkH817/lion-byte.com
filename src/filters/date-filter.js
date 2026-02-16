import { format } from 'date-fns'

/**
 * @param {string} date
 */
function dateFilter(date) {
  return format(new Date(date), 'MMMM dd, yyyy')
}

export default dateFilter
