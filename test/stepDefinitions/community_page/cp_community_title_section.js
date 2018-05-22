const checkElementCount = require('../../support/check/checkElementCount')

const defineSupportCode = require('cucumber').defineSupportCode

// module.exports = {
defineSupportCode(function ({ Then }) {
  Then(/^there should be 3 Community boxes displayed$/, () => {
    // const wsBoxes = browser.elements('body > header > div > div > a:nth-child(n) > div.box__inner')
    // // console.log(wsBoxes)
    //
    // expect(wsBoxes.value.length).to.equal(5)
    checkElementCount('body > header > div > div > a:nth-child(n) > div', 3)
  })

  Then(/^there should be 3 box titles displayed$/, () => {
    // const boxDescription = browser.elements('body > header > div > div > a:nth-child(n) > div.box__inner > p')
    // // console.log(boxDescription.getText())
    //
    // expect(boxDescription.value.length).to.equal(5)
    checkElementCount('body > header > div > div > a:nth-child(n) > div > p.medium', 3)
  })

  Then(/^there should be 3 box descriptions displayed$/, () => {
    // const learnMore = browser.elements('body > header > div > div > a:nth-child(n) > div.box__footer > span')
    // // console.log(learnMore.getText())
    //
    // expect(learnMore.value.length).to.equal(5)
    checkElementCount('body > header > div > div > a:nth-child(n) > div > p.normal', 3)
  })

  Then(/^there should be 3 box links displayed$/, () => {
    // const learnMore = browser.elements('body > header > div > div > a:nth-child(n) > div.box__footer > span')
    // // console.log(learnMore.getText())
    //
    // expect(learnMore.value.length).to.equal(5)
    checkElementCount('body > header > div > div > a:nth-child(n) > div > div > span', 3)
  })

  // Then(/^there should be an image icon for Concepts visible$/, () => {
  //   // const memberImage = browser.elements('body > header > div > div > a:nth-child(1) > div.box__inner > h2 > img')
  //   // // console.log(memberImage.getText())
  //   //
  //   // expect(memberImage.value.length).to.equal(1)
  //   checkElementCount('body > header > div > div > a:nth-child(1) > div.box__inner > h2 > img', 1)
  // })
  //
  // Then(/^there should be an image icon for FAQ visible$/, () => {
  //   // const memberImage = browser.elements('body > header > div > div > a:nth-child(2) > div.box__inner > h2 > img')
  //   // // console.log(memberImage.getText())
  //   //
  //   // expect(memberImage.value.length).to.equal(1)
  //   checkElementCount('body > header > div > div > a:nth-child(2) > div.box__inner > h2 > img', 1)
  // })
  //
  // Then(/^there should be an image icon for Network visible$/, () => {
  //   // const memberImage = browser.elements('body > header > div > div > a:nth-child(3) > div.box__inner > h2 > img')
  //   // // console.log(memberImage.getText())
  //   //
  //   // expect(memberImage.value.length).to.equal(1)
  //   checkElementCount('body > header > div > div > a:nth-child(3) > div.box__inner > h2 > img', 1)
  // })
  //
  // Then(/^there should be an image icon for Security visible$/, () => {
  //   // const memberImage = browser.elements('body > header > div > div > a:nth-child(4) > div.box__inner > h2 > img')
  //   // // console.log(memberImage.getText())
  //   //
  //   // expect(memberImage.value.length).to.equal(1)
  //   checkElementCount('body > header > div > div > a:nth-child(4) > div.box__inner > h2 > img', 1)
  // })
  //
  // Then(/^there should be an image icon for Tutorials visible$/, () => {
  //   // const memberImage = browser.elements('body > header > div > div > a:nth-child(5) > div.box__inner > h2 > img')
  //   // // console.log(memberImage.getText())
  //   //
  //   // expect(memberImage.value.length).to.equal(1)
  //   checkElementCount('body > header > div > div > a:nth-child(5) > div.box__inner > h2 > img', 1)
  // })
})
