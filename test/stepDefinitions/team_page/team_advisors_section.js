const defineSupportCode = require('cucumber').defineSupportCode

defineSupportCode(function ({ Then }) {
  Then(/^there should be at least 1 Advisor box visible$/, () => {
    const advisorBoxes = browser.elements('body > main > div > div:nth-child(4) > div')
    // console.log(advisorBoxes)

    expect(advisorBoxes.value.length).to.be.at.least(1)
  })

  Then(/^there should be at least 1 Advisor image visible$/, () => {
    const advisorImages = browser.elements('body > main > div > div:nth-child(4) > div > a > img')
    // console.log(advisorImages)

    expect(advisorImages.value.length).to.be.at.least(1)
  })

  Then(/^there should be at least 1 Advisor name visible$/, () => {
    const advisorNames = browser.elements('body > main > div > div:nth-child(4) > div > a > div > h2')
    // console.log(advisorNames)

    expect(advisorNames.value.length).to.be.at.least(1)
  })
})
