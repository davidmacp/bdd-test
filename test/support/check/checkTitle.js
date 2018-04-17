/**
 * Check the title of the current browserwindow
 * @param  {Type}     falseCase     Whether to check if the title matches the
 *                                  expected value or not
 * @param  {Type}     expectedTitle The expected title
 */
module.exports = function (falseCase, expectedTitle) {
  /**
     * The title of the current browserwindow
     * @type {String}
     */
  const title = browser.getTitle()

  if (falseCase) {
    expect(title).to.not
      .equal(
        expectedTitle,
        `Expected title not to be "${expectedTitle}"`
      )
  } else {
    expect(title).to
      .equal(
        expectedTitle,
        `Expected title to be "${expectedTitle}" but found "${title}"`
      )
  }
}
