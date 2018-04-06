const expect = require('chai').expect

module.exports = function () {
  this.Then(/^I expect that there is at least 1 article box visible in the roadmap updates section$/, () => {
    const primaryLinks = browser.elements('body > header > div.cnt.mb > div.grid > article')
    // console.log(primaryLinks)

    expect(primaryLinks.value.length).to.be.at.least(1)
    expect(primaryLinks.value.length).to.be.at.most(6)
  })
}
