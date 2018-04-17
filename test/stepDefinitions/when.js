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

const defineSupportCode = require('cucumber').defineSupportCode

defineSupportCode(function ({ When }) {
  When(/^the user clicks on the "([^"]*)" header link http:\/\/beta2\.dadi\.cloud\/"([^"]*)"$/, (pagename, url) => {
    browser.url('http://beta2.dadi.cloud/' + url)
  })

  When(/^the user clicks on the social media icon for "([^"]*)" in the header "([^"]*)"$/, (icon, url) => {
    browser.url(url)
  })

  When(/^the user clicks on the documentation link$/, () => {
    browser.url('https://docs.dadi.tech/')
  })

  When(
    /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
    clickElement
  )

  When(
    /^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/,
    setInputField
  )

  When(
    /^I clear the inputfield "([^"]*)?"$/,
    clearInputField
  )

  When(
    /^I drag element "([^"]*)?" to element "([^"]*)?"$/,
    dragElement
  )

  When(
    /^I submit the form "([^"]*)?"$/,
    submitForm
  )

  When(
    /^I pause for (\d+)ms$/,
    pause
  )

  When(
    /^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/,
    setCookie
  )

  When(
    /^I delete the cookie "([^"]*)?"$/,
    deleteCookie
  )

  When(
    /^I press "([^"]*)?"$/,
    pressButton
  )

  When(
    /^I (accept|dismiss) the (alertbox|confirmbox|prompt)$/,
    handleModal
  )

  When(
    /^I enter "([^"]*)?" into the prompt$/,
    setPromptText
  )

  When(
    /^I scroll to element "([^"]*)?"$/,
    scroll
  )

  When(
    /^I close the last opened (window|tab)$/,
    closeLastOpenedWindow
  )

  When(
    /^I focus the last opened (window|tab)$/,
    focusLastOpenedWindow
  )

  When(
    /^I select the (\d+)(st|nd|rd|th) option for element "([^"]*)?"$/,
    selectOptionByIndex
  )

  When(
    /^I select the option with the (name|value|text) "([^"]*)?" for element "([^"]*)?"$/,
    selectOption
  )

  When(
    /^I move to element "([^"]*)?"(?: with an offset of (\d+),(\d+))*$/,
    moveToElement
  )
})
