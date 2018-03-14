const expect = require('chai').expect

module.exports = function () {
  this.Then(/^there should be 11 Web services boxes visible$/, () => {
    const wsBoxes = browser.elements('#homeMain > div.cnt > div.grid div.box')
    expect(wsBoxes.value.length).to.equal(11)
  })
}
