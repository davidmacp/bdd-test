const checkElementCount = require('../../support/check/checkElementCount')

const defineSupportCode = require('cucumber').defineSupportCode

// module.exports = {
defineSupportCode(function ({ Then }) {
  Then(/^there should be 6 Social Media icons visible$/, () => {
    // const boxIcons = browser.elements('body > nav > div.cnt > ul > li.nav__social.nav--right > a:nth-child(n) > img')
    // // console.log(boxIcons)
    //
    // expect(boxIcons.value.length).to.equal(6)
    checkElementCount('body > nav > div.cnt > ul > li.nav__social.nav--right > a:nth-child(n) > img', 6)
  })
})
