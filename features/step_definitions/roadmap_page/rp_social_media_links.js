const expect = require('chai').expect

module.exports = function() {
  this.Then(/^there should be 6 Social Media icons visible$/, () => {
    const boxIcons = browser.elements('body > nav > div.cnt > ul > li.nav__social.nav--right > a:nth-child(n) > img')
    // console.log(boxIcons)

    expect(boxIcons.value.length).to.equal(6)
  })
}