const expect = require('chai').expect

module.exports = function() {
  this.Given(/^a web browser is at the DADI\.cloud home page$/, function() {
    browser.url("http://beta2.dadi.cloud/en")
  })

  this.When(/^the user clicks on the header link "([^"]*)"$/, url => {
    browser.url(url)
  })

  this.Then(/^the relevant page is opened with the page title as "([^"]*)"$/, title => {
    expect(browser.getTitle()).equal(title)
  })
}