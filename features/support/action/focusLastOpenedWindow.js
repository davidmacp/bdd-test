/**
 * Focus the last opened window
 * @param  {String}   obsolete Type of object to focus to (window or tab)
 */
/* eslint-disable no-unused-vars */
module.exports = function (obsolete) {
  /* eslint-enable no-unused-vars */

  if (!this || !this.browser) {
    return
  }

  /**
   * The last opened window
   * @type {Object}
   */
  const lastWindowHandle = this.browser.windowHandles().value.slice(-1)[0]

  this.browser.window(lastWindowHandle)
}
