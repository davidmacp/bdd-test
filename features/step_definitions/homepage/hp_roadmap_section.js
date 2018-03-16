const expect = require('chai').expect
const checkElementCount = require('../../support/check/checkElementCount')

module.exports = function() {
  this.When(/^the user scrolls to the Roadmap Updates section$/, () => {
    browser.scroll('div.subnav')
  })

  this.Then(/^the title "([^"]*)" should be displayed$/, (title) => {
    let heading = browser.getText('div.hdr:first-of-type')

    expect(heading[0]).equal(title)
  })

  this.Then(/^there should be 6 Roadmap update articles visible$/, () => {
    checkElementCount('div.grid:nth-of-type(1) article', 6)
  })

  this.Then(/^there should be 6 primary Roadmap badges$/, () => {
    checkElementCount('#stickContainer div.badge__primary.bg-blue.color-white', 6)
  })

  this.Then(/^there should be 6 clickable primary Roadmap badges to the Roadmap page$/, () => {
    checkElementCount('#stickContainer div.badge__primary.bg-blue.color-white > a[href="/en/roadmap"]', 6)
  })

  this.Then(/^there should be 6 secondary badges$/, () => {
    checkElementCount('#stickContainer div.badge__secondary > a', 6)
  })

  this.Then(/^there should be 6 clickable article titles$/, () => {
    checkElementCount('#stickContainer article > div.box__inner > h2 > a', 6)
  })

  this.Then(/^6 article descriptions$/, () => {
    checkElementCount('#stickContainer > div:nth-child(1) > div.grid > div:nth-child(n) > article > div.box__inner > div.mb > p:first-of-type', 6)
  })

  this.Then(/^there should be 6 valid dates$/, () => {
    checkElementCount('#stickContainer > div:nth-child(1) > div.grid > div:nth-child(n) > article > div.box__footer.bdt.bd-grey.small > time', 6)
  })

  this.Then(/^there should be 6 team member names$/, () => {
    checkElementCount('#stickContainer > div:nth-child(1) > div.grid > div:nth-child(n) > article > div.box__footer.bdt.bd-grey.small > a', 6)
  })

  this.Then(/^there should be 6 team member images$/, () => {
    checkElementCount('#stickContainer > div:nth-child(1) > div.grid > div:nth-child(n) > article > div.box__footer.bdt.bd-grey.small > a > img', 6)
  })

  this.Then(/^there should be a "([^"]*)" link$/, (updateTitle) => {
    let viewUpdate = browser.getText('#stickContainer > div:nth-child(1) > a')
    // console.log(viewUpdate)

    expect(viewUpdate).to.be.equal(updateTitle)
  })
}