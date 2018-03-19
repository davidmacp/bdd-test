const checkElementCount = require('../../support/check/checkElementCount')

module.exports = function() {
  this.Then(/^there should be 4 Latest Knowledge articles visible$/, () => {
    checkElementCount('#homeMain > div.cnt > div.grid article', 4)
  })

  this.Then(/^there should be 4 primary badges$/, () => {
    checkElementCount('#homeMain > div.cnt > div.grid div.badge__primary.bg-blue.color-white', 4)
  })

  this.Then(/^there should be 4 clickable article titles$/, () => {
    checkElementCount('#homeMain > div.cnt > div.grid article > div.box__inner > h2 > a', 4)
  })

  this.Then(/^4 article descriptions$/, () => {
    checkElementCount('#homeMain > div.cnt > div.grid article > div.box__inner > div.mb > p:first-of-type', 4)
  })

  this.Then(/^there should be 4 valid dates$/, () => {
    checkElementCount('#homeMain > div.cnt > div.grid article > div.box__footer.bdt.bd-grey.small > time', 4)
  })

  this.Then(/^there should be 4 team member names$/, () => {
    checkElementCount('#homeMain > div.cnt > div.grid article > div.box__footer.bdt.bd-grey.small > a', 4)
  })

  this.Then(/^there should be 4 team member images$/, () => {
    checkElementCount('#homeMain > div.cnt > div.grid article > div.box__footer.bdt.bd-grey.small > a > img', 4)
  })
}