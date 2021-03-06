const expect = require('chai').expect

/**
 * Check if the given element is enabled
 * @param  {String}   element   Element selector
 * @param  {String}   falseCase Whether to check if the given element is enabled
 *                              or not
 */
module.exports = function (element, falseCase) {
  if (!this.browser) {
    return
  }

    /**
     * The enabled state of the given element
     * @type {Boolean}
     */
  const isEnabled = this.browser.isEnabled(element)

  if (falseCase) {
    expect(isEnabled).to.not
            .equal(true, `Expected element "${element}" not to be enabled`)
  } else {
    expect(isEnabled).to
            .equal(true, `Expected element "${element}" to be enabled`)
  }
}
