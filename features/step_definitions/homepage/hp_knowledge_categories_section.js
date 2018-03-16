const expect = require('chai').expect
const checkElementCount = require('../../support/check/checkElementCount')

module.exports = function() {
  this.Then(/^there should be 5 Knowledge Category boxes visible$/, () => {
    checkElementCount('#homeMain > div.cnt > div:nth-child(6) > div:nth-child(n)', 5)
  })

  this.Then(/^there should be 5 box descriptions$/, () => {
    checkElementCount('#homeMain > div.cnt > div:nth-child(6) > div:nth-child(n) > a > div.box__inner > p', 5)
  })

  this.Then(/^there should be 5 "Learn more" links in the boxes$/, () => {
    checkElementCount('#homeMain > div.cnt > div:nth-child(6) > div:nth-child(n) > a > div.box__footer > span', 5)
  })

  this.Then(/^there should be an image icon for Concepts$/, () => {
    checkElementCount('#homeMain > div.cnt > div:nth-child(6) > div:nth-child(1) > a > div.box__inner > h2 > img', 1)
  })

  this.Then(/^there should be an image icon for FAQ$/, () => {
    checkElementCount('#homeMain > div.cnt > div:nth-child(6) > div:nth-child(2) > a > div.box__inner > h2 > img', 1)
  })

  this.Then(/^there should be an image icon for Network$/, () => {
    checkElementCount('#homeMain > div.cnt > div:nth-child(6) > div:nth-child(3) > a > div.box__inner > h2 > img', 1)
  })

  this.Then(/^there should be an image icon for Security$/, () => {
    checkElementCount('#homeMain > div.cnt > div:nth-child(6) > div:nth-child(4) > a > div.box__inner > h2 > img', 1)
  })

  this.Then(/^there should be an image icon for Tutorials$/, () => {
    checkElementCount('#homeMain > div.cnt > div:nth-child(6) > div:nth-child(5) > a > div.box__inner > h2 > img', 1)
  })

  this.Then(/^there should be a "([^"]*)" link displayed$/, (viewLink) => {
    let link = browser.getText('#homeMain > div.cnt > a')
    //console.log(link)

    expect(link).to.be.equal(viewLink)
  })
}