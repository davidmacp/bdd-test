const expect = require('chai').expect

/**
 * Check the URL of the given this.browser window
 * @param  {String}   falseCase   Whether to check if the URL matches the
 *                                expected value or not
 * @param  {String}   expectedUrl The expected URL to check against
 */
module.exports = function (falseCase, expectedUrl) {
  if (!this.browser) {
    return
  }

    /**
     * The current this.browser window's URL
     * @type {String}
     */
  const currentUrl = this.browser.url().value

  if (falseCase) {
    expect(currentUrl).to.not
            .equal(expectedUrl, `expected url not to be "${currentUrl}"`)
  } else {
    expect(currentUrl).to
            .equal(
                expectedUrl,
                `expected url to be "${expectedUrl}" but found ` +
                `"${currentUrl}"`
            )
  }
}
