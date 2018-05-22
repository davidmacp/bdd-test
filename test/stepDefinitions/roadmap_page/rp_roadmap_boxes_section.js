const defineSupportCode = require('cucumber').defineSupportCode

// module.exports = {
defineSupportCode(function ({ Then }) {
  Then(/^I expect that there is at least 1 Roadmap box visible$/, () => {
    const primaryLinks = browser.elements('#stickContainer > div.roadmap__milestones.grid.col--right > div:nth-child(n)')
    // console.log(primaryLinks)

    expect(primaryLinks.value.length).to.be.at.least(1)
    // expect(primaryLinks.value.length).to.be.at.most(8)
  })

  // Then(/^there should be an "([^"]*)" link at the foot of Network Updates section$/, (updateTitle) => {
  //   let viewUpdate = browser.getText('body > main > div:nth-child(3) > a')
  //   // console.log(viewUpdate)
  //
  //   expect(viewUpdate).to.be.equal(updateTitle)
  // })
})
