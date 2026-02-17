import { format } from 'date-fns'

/** @param {string} date */
export default function dateFilter(date) {
  return format(new Date(date), 'MMMM dd, yyyy')
}
