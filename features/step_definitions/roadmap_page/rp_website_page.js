const expect = require('chai').expect

module.exports = function() {
  this.Then(/^I expect that there is more than 1 article box visible on the website page$/, () => {
    const primaryLinks = browser.elements('body > main > div > div.grid > div:nth-child(n) > article')
    // console.log(primaryLinks)

    expect(primaryLinks.value.length).to.be.at.least(1)
    expect(primaryLinks.value.length).to.be.at.most(6)
  })
}