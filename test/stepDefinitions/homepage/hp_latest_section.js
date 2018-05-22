const checkElementCount = require('../../support/check/checkElementCount')
const scroll = require('../../support/action/scroll')

const defineSupportCode = require('cucumber').defineSupportCode

// module.exports = {
defineSupportCode(function ({ When }) {
  When(/^the user scrolls to the Latest from DADI section$/, () => {
    scroll('#stickContainer > div:nth-child(1) > div.hdr > h3 > span')
  })
})

defineSupportCode(function ({ Then }) {
  Then(/^there should be 6 Latest articles visible$/, () => {
    checkElementCount('#stickContainer > div:nth-child(1) > div.cols > article:nth-child(n)', 6)
  })

  Then(/^there should be 6 primary badges$/, () => {
    checkElementCount('#stickContainer > div:nth-child(1) > div.cols.cols--2 > article:nth-child(n) > div.box__inner > div > div.badge__primary', 6)
  })

  Then(/^there should be 6 clickable primary badges$/, () => {
    checkElementCount('#stickContainer div.badge__primary > a[href="/en/roadmap"]', 6)
  })

  Then(/^there should be 6 secondary badges$/, () => {
    checkElementCount('#stickContainer div.badge__secondary', 6)
  })

  Then(/^there should be 6 clickable article titles$/, () => {
    checkElementCount('#stickContainer article > div.box__inner > a > h2', 6)
  })

  Then(/^6 article descriptions$/, () => {
    checkElementCount('#stickContainer article > div.box__inner > a > p:first-of-type', 6)
  })

  Then(/^there should be 6 valid dates$/, () => {
    checkElementCount('#stickContainer article > div.box__footer > time', 6)
  })

  Then(/^there should be 6 team member names$/, () => {
    checkElementCount('#stickContainer article > div.box__footer > a', 6)
  })

  Then(/^there should be 6 team member images$/, () => {
    checkElementCount('#stickContainer article > div.box__footer > a > img', 6)
  })

  Then(/^there should be a "([^"]*)" link$/, (updateTitle) => {
    let viewUpdate = browser.getText('#stickContainer > div:nth-child(1) > a')
    // console.log(viewUpdate)

    expect(viewUpdate).to.be.equal(updateTitle)
  })
})
