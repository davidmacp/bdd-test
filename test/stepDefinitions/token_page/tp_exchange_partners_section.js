const defineSupportCode = require('cucumber').defineSupportCode

defineSupportCode(function ({ Then }) {
  Then(/^there should be 4 Partner boxes visible$/, () => {
    const partnerBoxes = browser.elements('body > main > div > div:nth-child(2) > div:nth-child(n)')
    // console.log(partnerBoxes)

    expect(partnerBoxes.value.length).to.equal(3)
  })
})
