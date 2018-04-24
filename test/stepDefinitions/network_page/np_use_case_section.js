const checkElementCount = require('../../support/check/checkElementCount')

const defineSupportCode = require('cucumber').defineSupportCode

// module.exports = {
defineSupportCode(function ({ Then }) {
  Then(/^there should be 11 Use case boxes visible$/, () => {
    // const wsBoxes = browser.elements('body > main > div > div.cols.cols--4 > a:nth-child(n) > div.box__inner')
    // // console.log(wsBoxes)
    // expect(wsBoxes.value.length).to.equal(11)
    checkElementCount('body > main > div > div.cols.cols--4 > a:nth-child(n) > div.box__inner', 11)
  })

  Then(/^there should be 11 image icons visible$/, () => {
    // const image = browser.elements('body > main > div > div.cols.cols--4 > a:nth-child(n) > div.box__inner > img')
    // // console.log(image)
    //
    // expect(image.value.length).to.equal(11)
    checkElementCount('body > main > div > div.cols.cols--4 > a:nth-child(n) > div.box__inner > img', 11)
  })

  Then(/^there should be 11 header titles visible$/, () => {
    // const boxTitle = browser.elements('body > main > div > div.cols.cols--4 > a:nth-child(n) > div.box__inner > h2')
    // // console.log(boxTitle)
    //
    // expect(boxTitle.value.length).to.equal(11)
    checkElementCount('body > main > div > div.cols.cols--4 > a:nth-child(n) > div.box__inner > h2', 11)
  })

  Then(/^there should be 11 box descriptions visible$/, () => {
    // const boxDescription = browser.elements('body > main > div > div.cols.cols--4 > a:nth-child(n) > div.box__inner > p:first-of-type')
    // // console.log(boxDescription.getText())
    //
    // expect(boxDescription.value.length).to.equal(11)
    checkElementCount('body > main > div > div.cols.cols--4 > a:nth-child(n) > div.box__inner > p:first-of-type', 11)
  })

  Then(/^there should be 11 "Learn more" links visible$/, () => {
    // const learnMore = browser.elements('body > main > div > div.cols.cols--4 > a:nth-child(n) > div.box__footer > span')
    // // console.log(learnMore)
    //
    // expect(learnMore.value.length).to.equal(11)
    checkElementCount('body > main > div > div.cols.cols--4 > a:nth-child(n) > div.box__footer > span', 11)
  })

  Then(/^there should be a "([^"]*)" link available$/, (updateTitle) => {
    let viewUpdate = browser.getText('body > main > div > a')
    // console.log(viewUpdate)

    expect(viewUpdate).to.be.equal(updateTitle)
  })
})
