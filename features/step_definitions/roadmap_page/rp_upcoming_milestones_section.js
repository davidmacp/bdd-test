const expect = require('chai').expect
const checkElementCount = require('../../support/check/checkElementCount')

module.exports = function() {
  this.Then(/^there should be 4 Milestone boxes visible$/, function() {
    checkElementCount('article', 3)
  })

  this.Then(/^there should be 4 Upcoming Milestone boxes visible$/, () => {
    const wsBoxes = browser.elements('body > header > div > div.grid > div:nth-child(n) ')
    console.log(wsBoxes)

    expect(wsBoxes.value.length).to.equal(4)
  })

  this.Then(/^there should be a "([^"]*)" link to click$/, (updateTitle) => {
    let viewUpdate = browser.getText('body > header > div > a')
    // console.log(viewUpdate)

    expect(viewUpdate).to.be.equal(updateTitle)
  })
}