const checkElementCount = require('../../support/check/checkElementCount')
const scroll = require('../../support/action/scroll')

const defineSupportCode = require('cucumber').defineSupportCode

// module.exports = {
defineSupportCode(function ({ When }) {
  When(/^the user clicks on the web services header link$/, () => {
    browser.click('a[href="#web-services"]')
  })
})

defineSupportCode(function ({ Then }) {
  Then(/^the sub menu is displayed$/, () => {
    const classes = browser.getAttribute('div#web-services', 'class')
    const classArray = classes.split(' ')

    expect(classArray).to.not.include('hide')
  })

  // Then(/^there should be a link for "([^"]*)"$/, { wrapperOptions: { retry: 2 } }, linkText => {
  //   // get text value of all links within the submenu
  //
  //   // [ 'Web', 'Publish', 'API', 'CDN', 'Queue' ]
  //   let submenuItems = browser.getText('div.subnav ul li a').map(item => {
  //     // lowercase all text values
  //     console.log(`**${item}**${linkText}`)
  //     return item.toLowerCase()
  //   })
  //   console.log(submenuItems, linkText)
  //   // test that linkText exists in the submenu links
  //   expect(submenuItems).to.include(linkText)
  // })

  Then(/^there should be links for "([^"]*)"$/, linkText => {
    let submenuItems = browser.getText('div.subnav ul li a').map(item => {
      // lowercase all text values
      // console.log(`**${item}**${linkText}`)
      return item.toLowerCase()
    })
    // console.log(submenuItems, linkText)
    // test that linkText exists in the submenu links
    expect(submenuItems).to.have.ordered.members(linkText.split(','))
  })
})
