const checkElementCount = require('../../support/check/checkElementCount')

const defineSupportCode = require('cucumber').defineSupportCode

// module.exports = {
defineSupportCode(function ({ Then }) {
  Then(/^there should be 4 Tutorial Article boxes displayed$/, () => {
    // const wsBoxes = browser.elements('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__inner')
    // // console.log(wsBoxes)
    //
    // expect(wsBoxes.value.length).to.equal(12)
    checkElementCount('body > main > div:nth-child(1) > div > div > article:nth-child(n) > div.box__inner', 4)
  })

  Then(/^there should be 4 Tutorial Article badges visible$/, () => {
    // const learnMore = browser.elements('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__inner > div > div.badge__primary')
    // // console.log(learnMore.getText())
    //
    // expect(learnMore.value.length).to.equal(12)
    checkElementCount('body > main > div:nth-child(1) > div > div > article:nth-child(n) > div.box__inner > div > div.badge__primary', 4)
  })

  Then(/^there should be 4 Tutorial Article titles visible in the boxes$/, () => {
    // const learnMore = browser.elements('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__inner > a > h2')
    // // console.log(learnMore)
    //
    // expect(learnMore.value.length).to.equal(12)
    checkElementCount('body > main > div:nth-child(1) > div > div > article:nth-child(n) > div.box__inner > a > h2', 4)
  })

  Then(/^there should be 4 Tutorial Article box descriptions displayed$/, () => {
    // const boxDescription = browser.elements('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__inner > a > p:first-of-type')
    // // console.log(boxDescription)
    //
    // expect(boxDescription.value.length).to.equal(12)
    checkElementCount('body > main > div:nth-child(1) > div > div > article:nth-child(n) > div.box__inner > a > p:first-of-type', 4)
  })

  Then(/^there should be 4 valid dates in the footer$/, () => {
    // const articleDate = browser.elements('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__footer > time')
    // // console.log(articleDate)
    //
    // expect(articleDate.value.length).to.equal(12)
    checkElementCount('body > main > div:nth-child(1) > div > div > article:nth-child(n) > div.box__footer > time', 4)
  })

  Then(/^there should be 4 team member names in the footer$/, () => {
    // const teamMember = browser.elements('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__footer > a')
    // // console.log(teamMember)
    //
    // expect(teamMember.value.length).to.equal(12)
    checkElementCount('body > main > div:nth-child(1) > div > div > article:nth-child(n) > div.box__footer > a', 4)
  })

  Then(/^there should be 4 team member images in the footer$/, () => {
    // const memberImage = browser.elements('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__footer > a > img')
    // // console.log(memberImage)
    //
    // expect(memberImage.value.length).to.equal(12)
    checkElementCount('body > main > div:nth-child(1) > div > div > article:nth-child(n) > div.box__footer > a > img', 4)
  })

  Then(/^there should be an "([^"]*)" link displayed/, (updateTitle) => {
    let viewUpdate = browser.getText('body > main > div:nth-child(1) > div > a')
    // console.log(viewUpdate)

    expect(viewUpdate).to.be.equal(updateTitle)
  })
})
