const expect = require('chai').expect

module.exports = function () {
  this.Then(/^there should be an "([^"]*)" link$/, (updateTitle) => {
    let viewUpdate = browser.getText('#stick > div > a')
    // console.log(viewUpdate)

    expect(viewUpdate).to.be.equal(updateTitle)
  })
}
