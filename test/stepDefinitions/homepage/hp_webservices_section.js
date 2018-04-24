const checkElementCount = require('../../support/check/checkElementCount')

const defineSupportCode = require('cucumber').defineSupportCode

// module.exports = {
defineSupportCode(function ({ Then }) {
  Then(/^there should be 11 Web services boxes visible$/, () => {
    checkElementCount('#homeMain > div.cnt > div:nth-child(2) > div:nth-child(n)', 11)
  })

  Then(/^there should be 11 header titles$/, () => {
    checkElementCount('#homeMain > div.cnt > div:nth-child(2) > div:nth-child(n) > a > h2', 11)
  })

  Then(/^there should be 11 box descriptions$/, () => {
    checkElementCount('#homeMain > div.cnt > div.grid div.box p')
  })

  Then(/^there should be 11 image icons displayed$/, () => {
    checkElementCount('#homeMain > div.cnt > div.grid div.box img', 11)
  })

  Then(/^there should be (\d+) "Learn more" links in the core products boxes$/, (count) => {
    const learnMore = browser.elements('#homeMain > div.cnt > div.grid div.box div.box__footer a:nth-of-type(1)')
    expect(learnMore.value.length).to.equal(parseInt(count))
  })

  Then(/^there should be (\d+) Latest updates links in the core products boxes$/, function (count) {
    const latestUpdate = browser.elements('#homeMain > div.cnt > div.grid div.box div.box__footer a:nth-of-type(2)')
    expect(latestUpdate.value.length).to.equal(parseInt(count))
  })

  // Then(/^there should be (\d+) Latest Updates links in the core products boxes$/, (count) => {
  // })

  Then(/^there should be 5 "How to install" links in the core products boxes$/, () => {
    checkElementCount('#homeMain > div.cnt > div.grid div.box div.box__footer a:nth-of-type(2)', 5)
  })

  Then(/^there should be 6 "Coming soon" text in the future core products boxes$/, () => {
    checkElementCount('#homeMain > div.cnt > div.grid div.box div.box__footer span', 6)
  })
})
