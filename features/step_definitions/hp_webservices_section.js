const expect = require('chai').expect

module.exports = function() {
  this.Then(/^there should be 11 Web services boxes visible$/, () => {
    const wsBoxes = browser.elements('#homeMain div.grid:nth-of-type(3)')
    console.log(wsBoxes)
    expect(wsBoxes.value.length).to.equal(11)
  })
}