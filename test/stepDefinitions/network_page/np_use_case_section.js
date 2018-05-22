const checkElementCount = require('../../support/check/checkElementCount')

const defineSupportCode = require('cucumber').defineSupportCode

// module.exports = {
defineSupportCode(function ({ Then }) {
  Then(/^there should be 12 Use case boxes visible$/, () => {
    // const wsBoxes = browser.elements('body > main > div > div.cols.cols--4 > a:nth-child(n) > div.box__inner')
    // // console.log(wsBoxes)
    // expect(wsBoxes.value.length).to.equal(12)
    checkElementCount('body > main > div:nth-child(3) > div:nth-child(4) > div:nth-child(n) > div', 12)
  })

  Then(/^there should be 12 image icons visible$/, () => {
    // const image = browser.elements('body > main > div > div.cols.cols--4 > a:nth-child(n) > div.box__inner > img')
    // // console.log(image)
    //
    // expect(image.value.length).to.equal(12)
    checkElementCount('body > main > div:nth-child(3) > div:nth-child(4) > div:nth-child(n) > div > img', 12)
  })

  Then(/^there should be 12 header titles visible$/, () => {
    // const boxTitle = browser.elements('body > main > div > div.cols.cols--4 > a:nth-child(n) > div.box__inner > h2')
    // // console.log(boxTitle)
    //
    // expect(boxTitle.value.length).to.equal(12)
    checkElementCount('body > main > div:nth-child(3) > div:nth-child(4) > div:nth-child(n) > div > h2', 12)
  })

  Then(/^there should be 12 box descriptions visible$/, () => {
    // const boxDescription = browser.elements('body > main > div > div.cols.cols--4 > a:nth-child(n) > div.box__inner > p:first-of-type')
    // // console.log(boxDescription.getText())
    //
    // expect(boxDescription.value.length).to.equal(12)
    checkElementCount('body > main > div:nth-child(3) > div:nth-child(4) > div:nth-child(n) > div > p:first-of-type', 12)
  })

  // Then(/^there should be 12 "Learn more" links visible$/, () => {
  //   // const learnMore = browser.elements('body > main > div > div.cols.cols--4 > a:nth-child(n) > div.box__footer > span')
  //   // // console.log(learnMore)
  //   //
  //   // expect(learnMore.value.length).to.equal(12)
  //   checkElementCount('body > main > div > div.cols.cols--4 > a:nth-child(n) > div.box__footer > span', 12)
  // })
  //
  // Then(/^there should be a "([^"]*)" link available$/, (updateTitle) => {
  //   let viewUpdate = browser.getText('body > main > div > a')
  //   // console.log(viewUpdate)
  //
  //   expect(viewUpdate).to.be.equal(updateTitle)
  // })
})
