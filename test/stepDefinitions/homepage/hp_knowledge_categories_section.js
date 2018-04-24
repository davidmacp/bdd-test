const checkElementCount = require('../../support/check/checkElementCount')

const defineSupportCode = require('cucumber').defineSupportCode

// module.exports = {
defineSupportCode(function ({ Then }) {
  Then(/^there should be 5 Knowledge Category boxes visible$/, () => {
    checkElementCount('#homeMain > div.cnt > div.cols > a:nth-child(n) > div.box__inner', 5)
  })

  Then(/^there should be 5 box descriptions$/, () => {
    checkElementCount('#homeMain > div.cnt > div.cols > a:nth-child(n) > div.box__inner > p', 5)
  })

  Then(/^there should be 5 "Learn more" links in the boxes$/, () => {
    checkElementCount('#homeMain > div.cnt > div.cols > a:nth-child(n) > div.box__footer > span', 5)
  })

  Then(/^there should be an image icon for Concepts$/, () => {
    checkElementCount('#homeMain > div.cnt > div.cols > a:nth-child(1) > div.box__inner > h2 > img', 1)
  })

  Then(/^there should be an image icon for FAQ$/, () => {
    checkElementCount('#homeMain > div.cnt > div.cols > a:nth-child(2) > div.box__inner > h2 > img', 1)
  })

  Then(/^there should be an image icon for Network$/, () => {
    checkElementCount('#homeMain > div.cnt > div.cols > a:nth-child(3) > div.box__inner > h2 > img', 1)
  })

  Then(/^there should be an image icon for Security$/, () => {
    checkElementCount('#homeMain > div.cnt > div.cols > a:nth-child(4) > div.box__inner > h2 > img', 1)
  })

  Then(/^there should be an image icon for Tutorials$/, () => {
    checkElementCount('#homeMain > div.cnt > div.cols > a:nth-child(5) > div.box__inner > h2 > img', 1)
  })

  Then(/^there should be a "([^"]*)" link displayed$/, (viewLink) => {
    let link = browser.getText('#homeMain > div.cnt > a')
    // console.log(link)

    expect(link).to.be.equal(viewLink)
  })
})
// }
