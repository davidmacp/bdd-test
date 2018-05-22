const defineSupportCode = require('cucumber').defineSupportCode

// module.exports = {
defineSupportCode(function ({ Then }) {
  Then(/^I expect that there is at least 1 article box visible in the network updates section$/, () => {
    const primaryLinks = browser.elements('body > main > div:nth-child(3) > div:nth-child(n) > article > div.box__inner')
    // console.log(primaryLinks)

    expect(primaryLinks.value.length).to.be.at.least(1)
    expect(primaryLinks.value.length).to.be.at.most(8)
  })

  Then(/^there should be an "([^"]*)" link at the foot of Network Updates section$/, (updateTitle) => {
    let viewUpdate = browser.getText('body > main > div:nth-child(3) > a')
    // console.log(viewUpdate)

    expect(viewUpdate).to.be.equal(updateTitle)
  })
})
