const expect = require('chai').expect

module.exports = function () {
  this.Then(/^there should be 4 Latest Knowledge articles visible$/, () => {
    const articleBoxes = browser.elements('#homeMain > div.cnt > div:nth-child(4) > article:nth-child(n) > div.box__inner')
    // console.log(articleBoxes)

    expect(articleBoxes.value.length).to.equal(4)
  })

  this.Then(/^there should be 4 primary badges$/, () => {
    const primaryBadges = browser.elements('#homeMain > div.cnt > div:nth-child(4) > article:nth-child(n) > div.box__inner > div > div.badge__primary ')

    expect(primaryBadges.value.length).to.equal(4)
  })

  this.Then(/^there should be 4 clickable article titles$/, () => {
    const articleTitles = browser.elements('#homeMain > div.cnt > div:nth-child(4) > article:nth-child(n) > div.box__inner > a > h2 ')
    // console.log(articleTitles.getText())

    expect(articleTitles.value.length).to.equal(4)
  })

  this.Then(/^4 article descriptions$/, () => {
    const articleDescription = browser.elements('#homeMain > div.cnt > div:nth-child(4) > article:nth-child(n) > div.box__inner > a > p:first-of-type')
    // console.log(articleDescription.getText())

    expect(articleDescription.value.length).to.equal(4)
  })

  this.Then(/^there should be 4 valid dates$/, () => {
    const articleDate = browser.elements('#homeMain > div.cnt > div:nth-child(4) > article:nth-child(n) > div.box__footer > time')
    // console.log(articleDate.getText())

    expect(articleDate.value.length).to.equal(4)
  })

  this.Then(/^there should be 4 team member names$/, () => {
    const teamMember = browser.elements('#homeMain > div.cnt > div:nth-child(4) > article:nth-child(n) > div.box__footer > a')
    // console.log(teamMember.getText())

    expect(teamMember.value.length).to.equal(4)
  })

  this.Then(/^there should be 4 team member images$/, () => {
    const memberImage = browser.elements('#homeMain > div.cnt > div:nth-child(4) > article:nth-child(n) > div.box__footer > a > img')
    // console.log(memberImage.getText())

    expect(memberImage.value.length).to.equal(4)
  })
}
