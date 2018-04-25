const checkElementCount = require('../../support/check/checkElementCount')

const defineSupportCode = require('cucumber').defineSupportCode

defineSupportCode(function ({ Then }) {
  Then(/^there should be 6 update articles visible$/, () => {
    // const articleBoxes = browser.elements('body > main > div > div.cols.cols--3 > article:nth-child(n)')
    //
    // expect(articleBoxes.value.length).to.equal(6)
    checkElementCount('body > main > div > div.cols.cols--3 > article:nth-child(n)', 6)
  })

  Then(/^there should be 6 article badges visible$/, () => {
    // const primaryBadges = browser.elements('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__inner > div')
    //
    // expect(primaryBadges.value.length).to.equal(6)
    checkElementCount('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__inner > div', 6)
  })

  Then(/^there should be 6 clickable primary badges to the Roadmap page$/, () => {
    // const primaryLinks = browser.elements('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__inner > div > div.badge__primary > a[href="/en/roadmap"]')
    // // console.log(primaryLinks)
    //
    // expect(primaryLinks.value.length).to.equal(6)
    checkElementCount('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__inner > div > div.badge__primary > a[href="/en/roadmap"]', 6)
  })

  Then(/^there should be 6 secondary badges visible$/, () => {
    // const secondaryBadges = browser.elements('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__inner > div > div.badge__secondary')
    // // console.log(secondaryBadges.getText())
    //
    // expect(secondaryBadges.value.length).to.equal(6)
    checkElementCount('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__inner > div > div.badge__secondary', 6)
  })

  Then(/^there should be 6 clickable article titles visible$/, () => {
    // const articleTitles = browser.elements('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__inner > a > h2')
    // // console.log(articleTitles.getText())
    //
    // expect(articleTitles.value.length).to.equal(6)
    checkElementCount('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__inner > a > h2', 6)
  })

  Then(/^6 article descriptions visible$/, () => {
    // const articleDescription = browser.elements('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__inner > a > p:first-of-type')
    // // console.log(articleDescription.getText())
    //
    // expect(articleDescription.value.length).to.equal(6)
    checkElementCount('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__inner > a > p:first-of-type', 6)
  })

  Then(/^there should be 6 valid dates visible$/, () => {
    // const articleDate = browser.elements('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__footer > time')
    // // console.log(articleDate.getText())
    //
    // expect(articleDate.value.length).to.equal(6)
    checkElementCount('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__footer > time', 6)
  })

  Then(/^there should be 6 team member names visible$/, () => {
    // const teamMember = browser.elements('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__footer > a')
    // // console.log(teamMember.getText())
    //
    // expect(teamMember.value.length).to.equal(6)
    checkElementCount('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__footer > a', 6)
  })

  Then(/^there should be 6 team member images visible$/, () => {
    // const memberImage = browser.elements('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__footer > a > img')
    // // console.log(memberImage.getText())
    //
    // expect(memberImage.value.length).to.equal(6)
    checkElementCount('body > main > div > div.cols.cols--3 > article:nth-child(n) > div.box__footer > a > img', 6)
  })

  Then(/^there should be a "([^"]*)" link visible$/, (updateTitle) => {
    let viewUpdate = browser.getText('body > main > div > div.pagination > a')
    // console.log(viewUpdate)

    expect(viewUpdate).to.be.equal(updateTitle)
  })
})
