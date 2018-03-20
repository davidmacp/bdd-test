const expect = require('chai').expect

module.exports = function() {
  this.Then(/^there should be 4 Latest Knowledge articles visible$/, () => {
    const articleBoxes = browser.elements('#homeMain > div.cnt > div.grid article')
    //console.log(articleBoxes)

    expect(articleBoxes.value.length).to.equal(4)
  })

  this.Then(/^there should be 4 primary badges$/, () => {
    const primaryBadges = browser.elements('#homeMain > div.cnt > div.grid div.badge__primary.bg-blue.color-white')

    expect(primaryBadges.value.length).to.equal(4)
  })

  this.Then(/^there should be 4 clickable article titles$/, () => {
    const articleTitles = browser.elements('#homeMain > div.cnt > div.grid article > div.box__inner > h2 > a')
    //console.log(articleTitles.getText())

    expect(articleTitles.value.length).to.equal(4)
  })

  this.Then(/^4 article descriptions$/, () => {
    const articleDescription = browser.elements('#homeMain > div.cnt > div.grid article > div.box__inner > div.mb > p:first-of-type')
    //console.log(articleDescription.getText())

    expect(articleDescription.value.length).to.equal(4)
  })

  this.Then(/^there should be 4 valid dates$/, () => {
    const articleDate = browser.elements('#homeMain > div.cnt > div.grid article > div.box__footer.bdt.bd-grey.small > time')
    //console.log(articleDate.getText())

    expect(articleDate.value.length).to.equal(4)
  })

  this.Then(/^there should be 4 team member names$/, () => {
    const teamMember = browser.elements('#homeMain > div.cnt > div.grid article > div.box__footer.bdt.bd-grey.small > a')
    //console.log(teamMember.getText())

    expect(teamMember.value.length).to.equal(4)
  })

  this.Then(/^there should be 4 team member images$/, () => {
    const memberImage = browser.elements('#homeMain > div.cnt > div.grid article > div.box__footer.bdt.bd-grey.small > a > img')
    //console.log(memberImage.getText())

    expect(memberImage.value.length).to.equal(4)
  })
}