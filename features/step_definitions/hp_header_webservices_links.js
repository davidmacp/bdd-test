const expect = require('chai').expect

module.exports = function () {
  this.When(/^the user clicks on the web services header link$/, () => {
    browser.click('a[href="#web-services"]')
  })

  this.Then(/^the sub menu is displayed$/, () => {
    const classes = browser.getAttribute('div#web-services', 'class')
    const classArray = classes.split(' ')

    expect(classArray).to.not.include('hide')
  })

  this.Then(/^there should be a link for "([^"]*)"$/, linkText => {
    // get text value of all links within the submenu
    let submenuItems = browser.getText('div.subnav ul li a') // [ 'Web', 'Publish', 'API', 'CDN', 'Queue' ]

    // lowercase all text values
    submenuItems = submenuItems.map(item => {
      return item.toLowerCase()
    })

    // test that linkText exists in the submenu links
    expect(submenuItems).to.include(linkText)
  })
}
