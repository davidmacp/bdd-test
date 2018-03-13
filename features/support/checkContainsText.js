const expect = require('chai').expect

/**
 * Check if the given elements contains text
 * @param  {String}   elementType   Element type (element or button)
 * @param  {String}   element       Element selector
 * @param  {String}   falseCase     Whether to check if the content contains
 *                                  the given text or not
 * @param  {String}   expectedText  The text to check against
 */
module.exports = function (elementType, element, falseCase, expectedText) {
  /**
  * The command to perform on the this.browser object
  * @type {String}
  */
  let command = 'getValue'

  if (!this.browser) {
    return
  }

  console.log(arguments)

  if (
        elementType === 'button' ||
        elementType === 'header' ||
        this.browser.getAttribute(element, 'value') === null
    ) {
    command = 'getText'
  }

  /**
   * False case
   * @type {Boolean}
   */
  let boolFalseCase

  /**
   * The expected text
   * @type {String}
   */
  let stringExpectedText = expectedText

  /**
   * The text of the element
   * @type {String}
   */
  const text = this.browser[command](element)

  if (typeof expectedText === 'undefined') {
    stringExpectedText = falseCase
    boolFalseCase = false
  } else {
    boolFalseCase = (falseCase === ' not')
  }

  if (boolFalseCase) {
    expect(text).to.not.contain(stringExpectedText)
  } else {
    expect(text).to.contain(stringExpectedText)
  }
}
