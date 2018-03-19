const expect = require('chai').expect
const checkElementCount = require('../../support/check/checkElementCount')

module.exports = function() {
  this.Then(/^there should be 6 Social Media icons visible$/, () => {
    checkElementCount('body > nav > div.cnt > ul > li.nav__social.nav--right > a', 5)
  })
}