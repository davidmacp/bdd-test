/**
 * Close all but the first tab
 * @param  {String}   obsolete Type of object to close (window or tab)
 */
/* eslint-disable no-unused-vars */
module.exports = function (obsolete) {
  if (!this || !this.browser) {
    return
  }

  /* eslint-enable no-unused-vars */
  /**
   * Get all the window handles
   * @type {Object}
   */
  const windowHandles = this.browser.windowHandles().value

  // Close all tabs but the first one
  windowHandles.forEach((handle, index) => {
    if (index > 0) {
      this.browser.switchTab(handle).close()
    }
  })
}
