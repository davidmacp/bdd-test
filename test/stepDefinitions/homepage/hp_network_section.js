const defineSupportCode = require('cucumber').defineSupportCode

defineSupportCode(function ({ Then }) {
  Then(/^I expect there is an "([^"]*)" link$/, (updateTitle) => {
    let viewUpdate = browser.getText('#stick > div > a')
    // console.log(viewUpdate)

    expect(viewUpdate).to.be.equal(updateTitle)
  })
})
