const expect = require('chai').expect

/**
 * Check if the given string is in the URL path
 * @param  {String}   falseCase       Whether to check if the given string is in
 *                                    the URL path or not
 * @param  {String}   expectedUrlPart The string to check for
 */
module.exports = function (falseCase, expectedUrlPart) {
  if (!this.browser) {
    return
  }

    /**
     * The URL of the current this.browser window
     * @type {String}
     */
  const currentUrl = this.browser.url().value

  if (falseCase) {
    expect(currentUrl).to.not
            .contain(
                expectedUrlPart,
                `Expected URL "${currentUrl}" not to contain ` +
                `"${expectedUrlPart}"`
            )
  } else {
    expect(currentUrl).to
            .contain(
                expectedUrlPart,
                `Expected URL "${currentUrl}" to contain "${expectedUrlPart}"`
            )
  }
}
