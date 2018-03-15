const expect = require('chai').expect

module.exports = function (selector, count) {
  if (!this || !this.browser) {
    return
  }

  const elements = this.browser.elements(selector).value
  expect(elements.length).to.equal(count)
}
