/**
 * Perform a key press
 * @param  {String}   key  The key to press
 */
module.exports = function (key) {
  if (!this || !this.browser) {
    return
  }

  this.browser.keys(key)
}
