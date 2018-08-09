const expect = require('chai').expect

/**
 * Check the title of the current this.browser window
 * @param  {Type}     falseCase     Whether to check if the title matches the
 *                                  expected value or not
 * @param  {Type}     expectedTitle The expected title
 */
module.exports = function (falseCase, expectedTitle) {
  if (!this.browser) {
    return
  }

  /**
     * The title of the current this.browser window
     * @type {String}
     */
  const title = this.browser.getTitle()

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
