const defineSupportCode = require('cucumber').defineSupportCode

// module.exports = {
defineSupportCode(function ({ Then }) {
  Then(/^I expect that there is at least 1 article box visible in the roadmap updates section$/, () => {
    const primaryLinks = browser.elements('body > header > div.cnt > div.cols > article > div.box__inner')
    // console.log(primaryLinks)

    expect(primaryLinks.value.length).to.be.at.least(1)
    expect(primaryLinks.value.length).to.be.at.most(6)
  })
})
