const expect = require('chai').expect

/**
 * Check if a new window or tab is opened
 * @param  {String}   obsolete  The type of opened object (window or tab)
 * @param  {String}   falseCase Whether to check if a new window/tab was opened
 *                              or not
 */
module.exports = function (obsolete, falseCase) {
  if (!this.browser) {
    return
  }

    /**
     * The handles of all open windows/tabs
     * @type {Object}
     */
  const windowHandles = this.browser.windowHandles().value

  if (falseCase) {
    expect(windowHandles.length).to
            .equal(1, 'A new window should not have been opened')
  } else {
    expect(windowHandles.length).to.not
            .equal(1, 'A new window has been opened')
  }
}
