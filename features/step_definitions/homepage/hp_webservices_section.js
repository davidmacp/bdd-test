const expect = require('chai').expect

module.exports = function() {
  this.Then(/^there should be 11 Web services boxes visible$/, () => {
    const wsBoxes = browser.elements('#homeMain > div.cnt > div.grid div.box')
    //console.log(wsBoxes)
    expect(wsBoxes.value.length).to.equal(11)
  })

  this.Then(/^there should be 11 header titles$/, () => {
    const boxTitle = browser.elements('#homeMain > div.cnt > div.grid div.box h2')
    //console.log(boxTitle)

    expect(boxTitle.value.length).to.equal(11)
  })

  this.Then(/^there should be 11 box descriptions$/, () => {
    const boxDescription = browser.elements('#homeMain > div.cnt > div.grid div.box p')
    //console.log(boxDescription.getText())

    expect(boxDescription.value.length).to.equal(11)
  })

  this.Then(/^there should be 11 image icons displayed$/, () => {
    const image = browser.elements('#homeMain > div.cnt > div.grid div.box img')
    //console.log(image)

    expect(image.value.length).to.equal(11)
  })

  // this.Then(/^there should be 5 "Learn more" links in the core products boxes$/, () => {
  //   const learnMore = browser.elements('#homeMain > div.cnt > div.grid div.box div.box__footer a:nth-of-type(1)')
  //   console.log(learnMore.getText())
  //
  //   expect(learnMore.value.length).to.equal(5)
  // })

  // this.Then(/^there should be 5 "Latest Updates" links in the core products boxes$/, () => {
  //   const latestUpdate = browser.elements('#homeMain > div.cnt > div.grid div.box div.box__footer a:nth-of-type(2)')
  //   //console.log(latestUpdate)
  //
  //   expect(latestUpdate.value.length).to.equal(5)
  // })

  this.Then(/^there should be 5 "How to install" links in the core products boxes$/, () => {
    const install = browser.elements('#homeMain > div.cnt > div.grid div.box div.box__footer a:nth-of-type(2)')
    //console.log(install)

    expect(install.value.length).to.equal(5)
  })

  this.Then(/^there should be 6 "Coming soon" text in the future core products boxes$/, () => {
    const comingSoon = browser.elements('#homeMain > div.cnt > div.grid div.box div.box__footer span')
    //console.log(comingSoon)

    expect(comingSoon.value.length).to.equal(6)
  })
}