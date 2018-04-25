const defineSupportCode = require('cucumber').defineSupportCode

defineSupportCode(function ({ Then }) {
  Then(/^there should be 4 Partner boxes visible$/, () => {
    const partnerBoxes = browser.elements('body > main > div > div.grid > div:nth-child(n) > a')
    // console.log(partnerBoxes)

    expect(partnerBoxes.value.length).to.equal(4)
  })
})
