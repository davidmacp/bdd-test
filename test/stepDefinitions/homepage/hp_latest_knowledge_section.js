const checkElementCount = require('../../support/check/checkElementCount')

const defineSupportCode = require('cucumber').defineSupportCode

// module.exports = {
defineSupportCode(function ({ Then }) {
  Then(/^there should be 4 Latest Knowledge articles visible$/, () => {
    checkElementCount('#homeMain > div.cnt > div.cols article', 4)
  })

  Then(/^there should be 4 primary badges$/, () => {
    checkElementCount('#homeMain > div.cnt > div.cols div.badge__primary.bg-blue.color-white', 4)
  })

  Then(/^there should be 4 clickable article titles$/, () => {
    checkElementCount('#homeMain > div.cnt > div.cols article > div.box__inner > a > h2', 4)
  })

  Then(/^4 article descriptions$/, () => {
    checkElementCount('#homeMain > div.cnt > div.cols article > div.box__inner > a > p:first-of-type', 4)
  })

  Then(/^there should be 4 valid dates$/, () => {
    checkElementCount('#homeMain > div.cnt > div.cols article > div.box__footer.bdt.bd-grey.small > time', 4)
  })

  Then(/^there should be 4 team member names$/, () => {
    checkElementCount('#homeMain > div.cnt > div.cols article > div.box__footer.bdt.bd-grey.small > a', 4)
  })

  Then(/^there should be 4 team member images$/, () => {
    checkElementCount('#homeMain > div.cnt > div.cols article > div.box__footer.bdt.bd-grey.small > a > img', 4)
  })
})
// }
