const checkElementCount = require('../../support/check/checkElementCount')

const defineSupportCode = require('cucumber').defineSupportCode

// module.exports = {
defineSupportCode(function ({ Then }) {
  Then(/^there should be 4 Twitter boxes visible$/, () => {
    checkElementCount('#homeMain > div.cnt.pt > div.cols.cols--4.vs- > div:nth-child(n)', 4)
  })

  Then(/^there should be 4 Reply icons visible$/, () => {
    checkElementCount('#homeMain > div.cnt.pt > div.cols.cols--4.vs- > div:nth-child(n) > div.box__footer> a:nth-child(1)', 4)
  })

  Then(/^there should be 4 Retweet icons visible$/, () => {
    checkElementCount('#homeMain > div.cnt.pt > div.cols.cols--4.vs- > div:nth-child(n) > div.box__footer> a:nth-child(2)', 4)
  })

  Then(/^there should be 4 Favourite icons visible$/, () => {
    checkElementCount('#homeMain > div.cnt.pt > div.cols.cols--4.vs- > div:nth-child(n) > div.box__footer> a:nth-child(3)', 4)
  })

  Then(/^there should be 4 Tweet dates visible$/, () => {
    checkElementCount('#homeMain > div.cnt.pt > div.cols.cols--4.vs- > div:nth-child(n) > div.box__footer> a:nth-child(4)', 4)
  })
})
