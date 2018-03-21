const expect = require('chai').expect

module.exports = function() {
  this.Then(/^the title "([^"]*)" should be displayed$/, (title) => {
    let heading = browser.getText('div.hdr:first-of-type')

    expect(heading[0]).equal(title)
  })

  this.Then(/^there should be 6 Roadmap update articles visible$/, () => {
    const articleBoxes = browser.elements('div.grid:nth-of-type(1) article')

    expect(articleBoxes.value.length).to.equal(6)
  })

  this.Then(/^there should be 6 primary Roadmap badges$/, () => {
    const primaryBadges = browser.elements('#stickContainer div.badge__primary.bg-blue.color-white')

    expect(primaryBadges.value.length).to.equal(6)
  })

  this.Then(/^there should be 6 clickable primary Roadmap badges to the Roadmap page$/, () => {
    const primaryLinks = browser.elements('#stickContainer div.badge__primary.bg-blue.color-white > a[href="/en/roadmap"]')
    // Is there a way of asserting that all href's are a[href="/en/roadmap"]

    expect(primaryLinks.value.length).to.equal(6)
  })

  this.Then(/^there should be 6 secondary badges$/, () => {
    const secondaryBadges = browser.elements('#stickContainer div.badge__secondary > a')
    // console.log(secondaryBadges.getText())

    expect(secondaryBadges.value.length).to.equal(6)
  })

  this.Then(/^there should be 6 clickable article titles$/, () => {
    const articleTitles = browser.elements('#stickContainer article > div.box__inner > h2 > a')
    // console.log(articleTitles.getText())

    expect(articleTitles.value.length).to.equal(6)
  })

  this.Then(/^6 article descriptions$/, () => {
    const articleDescription = browser.elements('#stickContainer > div:nth-child(1) > div.grid > div:nth-child(n) > article > div.box__inner > div.mb > p:first-of-type')
    // console.log(articleDescription.getText())

    expect(articleDescription.value.length).to.equal(6)
  })

  this.Then(/^there should be 6 valid dates$/, () => {
    const articleDate = browser.elements('#stickContainer > div:nth-child(1) > div.grid > div:nth-child(n) > article > div.box__footer.bdt.bd-grey.small > time')
    // console.log(articleDate.getText())

    expect(articleDate.value.length).to.equal(6)
  })

  this.Then(/^there should be 6 team member names$/, () => {
    const teamMember = browser.elements('#stickContainer > div:nth-child(1) > div.grid > div:nth-child(n) > article > div.box__footer.bdt.bd-grey.small > a')
    // console.log(teamMember.getText())

    expect(teamMember.value.length).to.equal(6)
  })

  this.Then(/^there should be 6 team member images$/, () => {
    const memberImage = browser.elements('#stickContainer > div:nth-child(1) > div.grid > div:nth-child(n) > article > div.box__footer.bdt.bd-grey.small > a > img')
    // console.log(memberImage.getText())

    expect(memberImage.value.length).to.equal(6)
  })

  this.Then(/^there should be a "([^"]*)" link$/, (updateTitle) => {
    let viewUpdate = browser.getText('#stickContainer > div:nth-child(1) > a')
    // console.log(viewUpdate)

    expect(viewUpdate).to.be.equal(updateTitle)
  })
}