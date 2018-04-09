const expect = require('chai').expect

module.exports = function () {
  this.Then(/^I expect that there is more than 1 article box visible on the cloud page$/, () => {
    const primaryLinks = browser.elements('body > main > div > div.cols.cols--3 > article:nth-child(n)')
    // console.log(primaryLinks)

    expect(primaryLinks.value.length).to.be.at.least(1)
    expect(primaryLinks.value.length).to.be.at.most(6)
  })
}
