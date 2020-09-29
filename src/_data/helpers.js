/**
 * Returns back some attributes based on whether the
 * link is active or a parent of an active item
 *
 * @param {string} itemUrl The link in question
 * @param {string} pageUrl The page context
 * @returns {string} The attributes or empty
 */
function getLinkActiveState (itemUrl, pageUrl) {
  let response = ''

  if (itemUrl === pageUrl) {
    response = ' aria-current="page"'
  }

  if (itemUrl.length > 1 && pageUrl.startsWith(itemUrl)) {
    response += ' data-state="active"'
  }

  return response
}

module.exports = { getLinkActiveState }
