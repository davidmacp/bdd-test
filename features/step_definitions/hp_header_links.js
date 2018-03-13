const expect = require('chai').expect

module.exports = function () {
  this.Then(/^the relevant page is opened with the page title as "([^"]*)"$/, title => {
    expect(browser.getTitle()).equal(title)
  })
}
