const checkElementCount = require('../../support/check/checkElementCount')

const defineSupportCode = require('cucumber').defineSupportCode

// module.exports = {
defineSupportCode(function ({ Then }) {
  Then(/^there should be 12 Latest Article boxes displayed$/, () => {
    // const wsBoxes = browser.elements('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__inner')
    // // console.log(wsBoxes)
    //
    // expect(wsBoxes.value.length).to.equal(12)
    checkElementCount('body > main > div > div.cols > article:nth-child(n) > div.box__inner', 12)
  })

  Then(/^there should be 12 Latest Article badges visible$/, () => {
    // const learnMore = browser.elements('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__inner > div > div.badge__primary')
    // // console.log(learnMore.getText())
    //
    // expect(learnMore.value.length).to.equal(12)
    checkElementCount('body > main > div > div.cols > article:nth-child(n) > div.box__inner > div > div.badge__primary', 12)
  })

  Then(/^there should be 12 Latest Article titles visible in the boxes$/, () => {
    // const learnMore = browser.elements('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__inner > a > h2')
    // // console.log(learnMore)
    //
    // expect(learnMore.value.length).to.equal(12)
    checkElementCount('body > main > div > div.cols > article:nth-child(n) > div.box__inner > a > h2', 12)
  })

  Then(/^there should be 12 Latest Article box descriptions displayed$/, () => {
    // const boxDescription = browser.elements('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__inner > a > p:first-of-type')
    // // console.log(boxDescription)
    //
    // expect(boxDescription.value.length).to.equal(12)
    checkElementCount('body > main > div > div.cols > article:nth-child(n) > div.box__inner > a > p:first-of-type', 12)
  })

  Then(/^there should be 12 valid dates in the footer$/, () => {
    // const articleDate = browser.elements('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__footer > time')
    // // console.log(articleDate)
    //
    // expect(articleDate.value.length).to.equal(12)
    checkElementCount('body > main > div > div.cols > article:nth-child(n) > div.box__footer > time', 12)
  })

  Then(/^there should be 12 team member names in the footer$/, () => {
    // const teamMember = browser.elements('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__footer > a')
    // // console.log(teamMember)
    //
    // expect(teamMember.value.length).to.equal(12)
    checkElementCount('body > main > div > div.cols > article:nth-child(n) > div.box__footer > a', 12)
  })

  Then(/^there should be 12 team member images in the footer$/, () => {
    // const memberImage = browser.elements('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__footer > a > img')
    // // console.log(memberImage)
    //
    // expect(memberImage.value.length).to.equal(12)
    checkElementCount('body > main > div > div.cols > article:nth-child(n) > div.box__footer > a > img', 12)
  })

  Then(/^there should be a "([^"]*)" link visible at the end of this section$/, (viewLink) => {
    let link = browser.getText('body > main > div > div.pagination > a')
    // console.log(link)

    expect(link).to.be.equal(viewLink)
  })
})
