const expect = require('chai').expect

module.exports = function () {
  this.Then(/^there should be 4 Partner boxes visible$/, () => {
    const partnerBoxes = browser.elements('body > main > div > div.grid > div:nth-child(n) > a')
    // console.log(partnerBoxes)

    expect(partnerBoxes.value.length).to.equal(4)
  })
}
