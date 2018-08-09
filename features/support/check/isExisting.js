const expect = require('chai').expect

/**
 * Check if the given element exists in the current DOM
 * @param  {String}   selector  Element selector
 * @param  {String}   falseCase Whether to check if the element exists or not
 */
module.exports = function (selector, falseCase) {
  if (!this.browser) {
    return
  }

  /**
     * Elements found in the DOM
     * @type {Object}
     */
  const elements = this.browser.elements(selector).value

  if (falseCase) {
    expect(elements).to.have
      .lengthOf(0, `Expected element "${selector}" not to exist`)
  } else {
    expect(elements).to.have.length
      .above(0, `Expected element "${selector}" to exist`)
  }
}
