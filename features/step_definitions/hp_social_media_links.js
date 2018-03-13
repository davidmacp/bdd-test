const expect = require('chai').expect

module.exports = function () {
  this.Then(/^the relevant social media page is opened in a new window with the page title as "([^"]*)"$/, title => {
    expect(browser.getTitle()).equal(title)
  })
}
