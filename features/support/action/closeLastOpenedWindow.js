/**
 * Close the last opened window
 * @param  {String}   obsolete Type of object to close (window or tab)
 */
/* eslint-disable no-unused-vars */
module.exports = function (obsolete) {
  if (!this || !this.browser) {
    return
  }

/* eslint-enable no-unused-vars */
  /**
   * The last opened window handle
   * @type {Object}
   */
  const lastWindowHandle = this.browser.windowHandles().value.slice(-1)[0]

  this.browser.window(lastWindowHandle)

  this.browser.close()
}
