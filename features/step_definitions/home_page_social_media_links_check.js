const expect = require('chai').expect

module.exports = function() {
  this.When(/^the user clicks on the social media icon for "([^"]*)" in the header "([^"]*)"$/, (icon, url) => {
    browser.url(url)
  })

  this.Then(/^the relevant social media page is opened in a new window with the page title as "([^"]*)"$/, title => {
    expect(browser.getTitle()).equal(title)
  })
}