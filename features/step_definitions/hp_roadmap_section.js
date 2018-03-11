const expect = require('chai').expect

module.exports = function () {
  this.Then(/^there should be 6 Roadmap update articles visible$/, () => {
    const articleBoxes = browser.elements('div.grid:nth-of-type(1) article')

    expect(articleBoxes.value.length).to.equal(6)
  })
}
