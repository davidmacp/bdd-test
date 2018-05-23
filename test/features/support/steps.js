// features/support/steps.js
const { Before, Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const puppeteer = require('puppeteer')

// const openWebsite = require('./action/openWebsite')

// defineSupportCode(async function ({ Given }) {
Before({ timeout: 60 * 1000 }, async function testCase () {
  this.browser = await puppeteer.launch({headless: false})
})

Given('a variable set to {int}', function (number) {
  this.setTo(number)
})

Given(/^I open the (url|site) "([^"]*)?"$/, function (type, page) {
  // Write code here that turns the phrase above into concrete actions
  this.openWebsite(type, page)
})

Then(/^I expect that element "([^"]*)?" (has|does not have) the class "([^"]*)?"$/, function (elem, falseCase, expectedClassName) {
  this.checkClass(elem, falseCase, expectedClassName)
})

When('I increment the variable by {int}', function (number) {
  this.incrementBy(number)
})

Then('the variable should contain {int}', function (number) {
  expect(this.variable).to.eql(number)
})
