module.exports = function () {
  this.Given(/^a web browser is at the DADI\.cloud home page$/, function () {
    browser.url('http://beta2.dadi.cloud/')
  })
}
