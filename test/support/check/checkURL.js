/**
 * Check the URL of the given browserwindow
 * @param  {String}   falseCase   Whether to check if the URL matches the
 *                                expected value or not
 * @param  {String}   expectedUrl The expected URL to check against
 */
module.exports = function (falseCase, expectedUrl) {
  /**
     * The current browserwindow's URL
     * @type {String}
     */
  const currentUrl = browser.url().value

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
