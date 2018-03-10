const expect = require('chai').expect

module.exports = function() {
  this.Given(/^a web browser is at the DADI\.cloud home page$/, () => {
    browser.url("http://beta2.dadi.cloud/")
  })

  this.When(/^the user clicks on the web services header link$/, () => {
    browser.url("http://beta2.dadi.cloud/en#web-services")
  })

  this.Then(/^the sub menu is displayed$/, function() {
    var submenu = browser.getElementsByClassName('subnav slide-toggle fm')[0]
    if (submenu) {
      return true
    }
  })
}