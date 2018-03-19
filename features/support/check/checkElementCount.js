const expect = require('chai').expect

module.exports = function(selector, count) {
  console.log("these are the inputs: ",
    selector, count)
  console.log(this)
  if (!this || !this.browser) {
    return
  }
  console.log(1)
  const elements = this.browser.elements(selector).value
  console.log(this.browser.elements(selector))
  expect(elements.length).to.equal(count)
}