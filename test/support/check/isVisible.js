/**
 * Visible state of the give element
 * @type {String}
 */
module.exports = function (element, falseCase) {
  const isVisible = browser.isVisible(element)

  if (falseCase) {
    expect(isVisible).to.not.equal(true, `Expected element "${element}" not to be visible`)
  } else {
    expect(isVisible).to.equal(true, `Expected element "${element}" to be visible`)
  }
}
