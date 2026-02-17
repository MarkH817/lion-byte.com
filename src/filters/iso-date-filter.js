/**
 * @param {string} date
 */
export default function isoDateFilter(date) {
  return new Date(date).toISOString()
}
