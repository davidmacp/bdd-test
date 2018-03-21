const expect = require('chai').expect

module.exports = function() {
  this.Then(/^there should be 5 Knowledge Category boxes displayed$/, () => {
    const wsBoxes = browser.elements('body > header > div > div > div:nth-child(n)')
    // console.log(wsBoxes)

    expect(wsBoxes.value.length).to.equal(5)
  })

  this.Then(/^there should be 5 box descriptions displayed$/, () => {
    const boxDescription = browser.elements('body > header > div > div > div:nth-child(n) > a > div.box__inner > p')
    // console.log(boxDescription.getText())

    expect(boxDescription.value.length).to.equal(5)
  })

  this.Then(/^there should be 5 "Learn more" links visible in the boxes$/, () => {
    const learnMore = browser.elements('body > header > div > div > div:nth-child(n) > a > div.box__footer > span')
    // console.log(learnMore.getText())

    expect(learnMore.value.length).to.equal(5)
  })

  this.Then(/^there should be an image icon for Concepts visible$/, () => {
    const memberImage = browser.elements('body > header > div > div > div:nth-child(1) > a > div.box__inner > h2 > img')
    // console.log(memberImage.getText())

    expect(memberImage.value.length).to.equal(1)
  })

  this.Then(/^there should be an image icon for FAQ visible$/, () => {
    const memberImage = browser.elements('body > header > div > div > div:nth-child(2) > a > div.box__inner > h2 > img')
    //console.log(memberImage.getText())

    expect(memberImage.value.length).to.equal(1)
  })

  this.Then(/^there should be an image icon for Network visible$/, () => {
    const memberImage = browser.elements('body > header > div > div > div:nth-child(3) > a > div.box__inner > h2 > img')
    //console.log(memberImage.getText())

    expect(memberImage.value.length).to.equal(1)
  })

  this.Then(/^there should be an image icon for Security visible$/, () => {
    const memberImage = browser.elements('body > header > div > div > div:nth-child(4) > a > div.box__inner > h2 > img')
    //console.log(memberImage.getText())

    expect(memberImage.value.length).to.equal(1)
  })

  this.Then(/^there should be an image icon for Tutorials visible$/, () => {
    const memberImage = browser.elements('body > header > div > div > div:nth-child(5) > a > div.box__inner > h2 > img')
    //console.log(memberImage.getText())

    expect(memberImage.value.length).to.equal(1)
  })
}