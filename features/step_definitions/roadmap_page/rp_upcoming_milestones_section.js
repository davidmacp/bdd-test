const expect = require('chai').expect

module.exports = function () {
  this.Then(/^there should be 4 Upcoming Milestone boxes visible$/, () => {
    const wsBoxes = browser.elements('body > header > div > div.grid > article')
    // console.log(wsBoxes)

    expect(wsBoxes.value.length).to.equal(4)
  })

  this.Then(/^there should be 4 primary badges visible$/, () => {
    const primaryBadges = browser.elements('body > header > div > div.grid > article > div.box__inner > div.badge > div.badge__primary')
    // console.log(primaryBadges)

    expect(primaryBadges.value.length).to.equal(4)
  })

  this.Then(/^there should be 4 secondary badges visible$/, () => {
    const secondaryBadges = browser.elements('body > header > div > div.grid > article > div.box__inner > div.badge > div.badge__secondary')
    // console.log(secondaryBadges.getText())

    expect(secondaryBadges.value.length).to.equal(4)
  })

  this.Then(/^there should be 4 article titles visible$/, () => {
    const articleTitles = browser.elements('body > header > div > div.grid > article > div.box__inner > h2')
    // console.log(articleTitles.getText())

    expect(articleTitles.value.length).to.equal(4)
  })

  this.Then(/^4 article descriptions are visible$/, () => {
    const articleDescription = browser.elements('body > header > div > div.grid > article > div.box__inner > div.mb > p')
    // console.log(articleDescription.getText())

    expect(articleDescription.value.length).to.equal(4)
  })

  this.Then(/^there should be 4 milestone dates$/, () => {
    const articleDate = browser.elements('body > header > div > div.grid > article > div.box__footer > time')
    // console.log(articleDate.getText())

    expect(articleDate.value.length).to.equal(4)
  })

  this.Then(/^there should be a "([^"]*)" link to click$/, (updateTitle) => {
    let viewUpdate = browser.getText('body > header > div > a')
    // console.log(viewUpdate)

    expect(viewUpdate).to.be.equal(updateTitle)
  })
}
