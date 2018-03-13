const expect = require('chai').expect

/**
 * Check if the given URL was opened in a new window
 * @param  {String}   expectedUrl The URL to check for
 * @param  {String}   obsolete    Indicator for the type (window or tab) unused
 */
/* eslint-disable no-unused-vars */
module.exports = (expectedUrl, obsolete) => {
/* eslint-enable no-unused-vars */
    /**
     * All the current window handles
     * @type {Object}
     */
  const windowHandles = this.browser.windowHandles().value

  expect(windowHandles).length.to.not.equal(1, 'A popup was not opened')

    /**
     * The last opened window handle
     * @type {Object}
     */
  const lastWindowHandle = windowHandles.slice(-1)

    // Make sure we focus on the last opened window handle
  this.browser.window(lastWindowHandle[0])

    /**
     * Get the URL of the current this.browser window
     * @type {String}
     */
  const windowUrl = this.browser.url().value

  expect(windowUrl).to
        .contain(expectedUrl, 'The popup has a incorrect url')

  this.browser.close()
}
