const expect = require('chai').expect

module.exports = function() {
  this.Given(/^a web browser is at the DADI\.cloud home page "([^"]*)"$/, function(homepage) {
    browser.url(homepage)
  })

  this.When(/^the user clicks on the "([^"]*)" header link "([^"]*)""([^"]*)"$/, (pagename, homepage, url) => {
    browser.url(homepage + url)
  })

  this.Then(/^the relevant page is opened with the page title as "([^"]*)"$/, title => {
    expect(browser.getTitle()).equal(title)
  })
}