const expect = require('chai').expect

module.exports = function () {
  this.Then(/^there should be 6 Roadmap update articles visible$/, () => {
    const articleBoxes = browser.elements('div.grid:first-of-type article')

    console.log(articleBoxes)
    expect(articleBoxes.value.length).to.equal(6)
  })
}
