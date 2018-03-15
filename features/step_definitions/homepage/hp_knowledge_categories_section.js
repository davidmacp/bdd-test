const expect = require('chai').expect

module.exports = function() {
  this.Then(/^there should be 5 Knowledge Category boxes visible$/, () => {
    const wsBoxes = browser.elements('#homeMain > div.cnt > div:nth-child(6) > div:nth-child(n)')
    //console.log(wsBoxes)

    expect(wsBoxes.value.length).to.equal(5)
  })

  this.Then(/^there should be 5 box descriptions$/, () => {
    const boxDescription = browser.elements('#homeMain > div.cnt > div:nth-child(6) > div:nth-child(n) > a > div.box__inner > p')
    //console.log(boxDescription.getText())

    expect(boxDescription.value.length).to.equal(5)
  })

  this.Then(/^there should be 5 "Learn more" links in the boxes$/, () => {
    const learnMore = browser.elements('#homeMain > div.cnt > div:nth-child(6) > div:nth-child(n) > a > div.box__footer > span')
    //console.log(learnMore.getText())

    expect(learnMore.value.length).to.equal(5)
  })

  this.Then(/^there should be an image icon for Concepts$/, () => {
    const memberImage = browser.elements('#homeMain > div.cnt > div:nth-child(6) > div:nth-child(1) > a > div.box__inner > h2 > img')
    //console.log(memberImage.getText())

    expect(memberImage.value.length).to.equal(1)
  })

  this.Then(/^there should be an image icon for FAQ$/, () => {
    const memberImage = browser.elements('#homeMain > div.cnt > div:nth-child(6) > div:nth-child(2) > a > div.box__inner > h2 > img')
    //console.log(memberImage.getText())

    expect(memberImage.value.length).to.equal(1)
  })

  this.Then(/^there should be an image icon for Network$/, () => {
    const memberImage = browser.elements('#homeMain > div.cnt > div:nth-child(6) > div:nth-child(3) > a > div.box__inner > h2 > img')
    //console.log(memberImage.getText())

    expect(memberImage.value.length).to.equal(1)
  })

  this.Then(/^there should be an image icon for Security$/, () => {
    const memberImage = browser.elements('#homeMain > div.cnt > div:nth-child(6) > div:nth-child(4) > a > div.box__inner > h2 > img')
    //console.log(memberImage.getText())

    expect(memberImage.value.length).to.equal(1)
  })

  this.Then(/^there should be an image icon for Tutorials$/, () => {
    const memberImage = browser.elements('#homeMain > div.cnt > div:nth-child(6) > div:nth-child(5) > a > div.box__inner > h2 > img')
    //console.log(memberImage.getText())

    expect(memberImage.value.length).to.equal(1)
  })

  this.Then(/^there should be a "([^"]*)" link displayed$/, (viewLink) => {
    let link = browser.getText('#homeMain > div.cnt > a')
    //console.log(link)

    expect(link).to.be.equal(viewLink)
  })
}