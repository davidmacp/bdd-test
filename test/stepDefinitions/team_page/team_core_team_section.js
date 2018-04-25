const checkElementCount = require('../../support/check/checkElementCount')

const defineSupportCode = require('cucumber').defineSupportCode

defineSupportCode(function ({ Then }) {
  Then(/^there should be 16 Core Team member boxes visible$/, () => {
    // const teamBoxes = browser.elements('body > main > div > div:nth-child(2) > div:nth-child(n)')
    // // console.log(teamBoxes)
    //
    // expect(teamBoxes.value.length).to.equal(16)
    checkElementCount('body > main > div > div:nth-child(2) > div:nth-child(n)', 16)
  })

  Then(/^there should be 16 Core Team member images visible$/, () => {
    // const teamImages = browser.elements('body > main > div > div:nth-child(2) > div:nth-child(n) > a > img')
    // // console.log(teamImages)
    //
    // expect(teamImages.value.length).to.equal(16)
    checkElementCount('body > main > div > div:nth-child(2) > div:nth-child(n) > a > img', 16)
  })

  Then(/^there should be 16 Core Team member names visible$/, () => {
    // const teamNames = browser.elements('body > main > div > div:nth-child(2) > div:nth-child(n) > a > div > h2')
    // // console.log(teamNames)
    //
    // expect(teamNames.value.length).to.equal(16)
    checkElementCount('body > main > div > div:nth-child(2) > div:nth-child(n) > a > div > h2', 16)
  })

  Then(/^there should be 16 Core Team member titles visible$/, () => {
    // const memberTitles = browser.elements('body > main > div > div:nth-child(2) > div:nth-child(n) > a > div > p')
    // // console.log(memberTitles)
    //
    // expect(memberTitles.value.length).to.equal(16)
    checkElementCount('body > main > div > div:nth-child(2) > div:nth-child(n) > a > div > p', 16)
  })
})