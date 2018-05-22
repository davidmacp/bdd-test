const defineSupportCode = require('cucumber').defineSupportCode

// module.exports = {
defineSupportCode(function ({ Then }) {
  Then(/^I expect that there is at least 1 article box visible in the updates section$/, () => {
    const primaryLinks = browser.elements('body > main > div:nth-child(2) > div > div > article:nth-child(n) > div.box__inner')
    // console.log(primaryLinks)

    expect(primaryLinks.value.length).to.be.at.least(1)
    expect(primaryLinks.value.length).to.be.at.most(4)
  })

  Then(/^there should be an "([^"]*)" link available/, (updateTitle) => {
    let viewUpdate = browser.getText('body > main > div:nth-child(2) > div > a')
    // console.log(viewUpdate)

    expect(viewUpdate).to.be.equal(updateTitle)
  })
})
