const expect = require('chai').expect

/**
 * Check if the current URL path matches the given path
 * @param  {String}   falseCase    Whether to check if the path matches the
 *                                 expected value or not
 * @param  {String}   expectedPath The expected path to match against
 */
module.exports = function (falseCase, expectedPath) {
  if (!this.browser) {
    return
  }

  /**
   * The URL of the current this.browser window
   * @type {String}
   */
  let currentUrl = this.browser.url().value.replace(/http(s?):\/\//, '')

  /**
   * The base URL of the current this.browser window
   * @type {Object}
   */
  const domain = `${currentUrl.split('/')[0]}`

  currentUrl = currentUrl.replace(domain, '')

  if (falseCase) {
    expect(currentUrl).to.not
      .equal(expectedPath, `expected path not to be "${currentUrl}"`)
  } else {
    expect(currentUrl).to
      .equal(
        expectedPath,
        `expected path to be "${expectedPath}" but found ` +
        `"${currentUrl}"`
      )
  }
}
