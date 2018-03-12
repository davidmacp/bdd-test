const expect = require('chai').expect

module.exports = function () {
  // this.Given(/^a web browser is at the DADI\.cloud home page$/, function() {
  //   browser.url("http://beta2.dadi.cloud/")
  // })

  this.When(/^the user clicks on the documentation link$/, () => {
    browser.url('https://docs.dadi.tech/')
  })

  this.Then(/^the DADI\.tech website is opened with the page title as "DADI Documentation"$/, () => {
    expect(browser.getTitle()).equal('DADI Documentation')
  })
}
