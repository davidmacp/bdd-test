module.exports = function () {
  this.When(/^the user clicks on the "([^"]*)" header link http:\/\/beta2\.dadi\.cloud\/"([^"]*)"$/, (pagename, url) => {
    browser.url('http://beta2.dadi.cloud/' + url)
  })

  this.When(/^the user clicks on the social media icon for "([^"]*)" in the header "([^"]*)"$/, (icon, url) => {
    browser.url(url)
  })

  this.When(/^the user clicks on the documentation link$/, () => {
    browser.url('https://docs.dadi.tech/')
  })
}
