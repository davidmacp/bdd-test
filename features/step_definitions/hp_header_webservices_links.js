const expect = require('chai').expect

module.exports = function () {
  this.Given(/^a web browser is at the DADI\.cloud home page$/, () => {
    browser.url('http://beta2.dadi.cloud/')
  })

  this.When(/^the user clicks on the web services header link$/, () => {
    browser.click('a[href="#web-services"]')
  })

  this.Then(/^the sub menu is displayed$/, function () {
    const classes = browser.getAttribute('div.subnav', 'class')
    const classArray = classes.split(' ')

    expect(classArray).to.not.include('hide')
  })
}
