const clearInputField = require('../support/action/clearInputField')
const clickElement = require('../support/action/clickElement')
const closeLastOpenedWindow = require('../support/action/closeLastOpenedWindow')
const deleteCookie = require('../support/action/deleteCookie')
const dragElement = require('../support/action/dragElement')
const focusLastOpenedWindow = require('../support/action/focusLastOpenedWindow')
const handleModal = require('../support/action/handleModal')
const moveToElement = require('../support/action/moveToElement')
const pause = require('../support/action/pause')
const pressButton = require('../support/action/pressButton')
const scroll = require('../support/action/scroll')
const selectOption = require('../support/action/selectOption')
const selectOptionByIndex = require('../support/action/selectOptionByIndex')
const setCookie = require('../support/action/setCookie')
const setInputField = require('../support/action/setInputField')
const setPromptText = require('../support/action/setPromptText')
const submitForm = require('../support/action/submitForm')

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

  this.When(
    /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
    clickElement
  )

  this.When(
    /^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/,
    setInputField
  )

  this.When(
    /^I clear the inputfield "([^"]*)?"$/,
    clearInputField
  )

  this.When(
    /^I drag element "([^"]*)?" to element "([^"]*)?"$/,
    dragElement
  )

  this.When(
    /^I submit the form "([^"]*)?"$/,
    submitForm
  )

  this.When(
    /^I pause for (\d+)ms$/,
    pause
  )

  this.When(
    /^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/,
    setCookie
  )

  this.When(
    /^I delete the cookie "([^"]*)?"$/,
    deleteCookie
  )

  this.When(
    /^I press "([^"]*)?"$/,
    pressButton
  )

  this.When(
    /^I (accept|dismiss) the (alertbox|confirmbox|prompt)$/,
    handleModal
  )

  this.When(
    /^I enter "([^"]*)?" into the prompt$/,
    setPromptText
  )

  this.When(
    /^I scroll to element "([^"]*)?"$/,
    scroll
  )

  this.When(
    /^I close the last opened (window|tab)$/,
    closeLastOpenedWindow
  )

  this.When(
    /^I focus the last opened (window|tab)$/,
    focusLastOpenedWindow
  )

  this.When(
    /^I select the (\d+)(st|nd|rd|th) option for element "([^"]*)?"$/,
    selectOptionByIndex
  )

  this.When(
    /^I select the option with the (name|value|text) "([^"]*)?" for element "([^"]*)?"$/,
    selectOption
  )

  this.When(
    /^I move to element "([^"]*)?"(?: with an offset of (\d+),(\d+))*$/,
    moveToElement
  )
}
