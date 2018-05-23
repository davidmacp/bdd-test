// features/support/world.js
const { setWorldConstructor } = require('cucumber')
// const puppeteer = require('puppeteer')

const checkClass = require('../support/check/checkClass')
const openWebsite = require('./action/openWebsite')

class CustomWorld {
  constructor () {
    this.variable = 0

    this.checkClass = checkClass.bind(this)
    this.openWebsite = openWebsite.bind(this)
  }

  setTo (number) {
    this.variable = number
  }

  incrementBy (number) {
    this.variable += number
  }
}

setWorldConstructor(CustomWorld)
