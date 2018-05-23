Feature: Home Page - Introduction section

  As a user on the DADI.cloud home page they are able to view the Introduction section

Scenario: The Introduction section is visible
  Given I open the url "/"
  When I pause for 1000ms

Scenario: DADI logo visible
  Then I expect that element "body > header > div.intro__about.animation.fade-in > h1 > img" becomes visible

Scenario: Introduction is visible
  Then I expect that element "#a-new-era-of-cloud-computing-services-powered-by-blockchain-technology-" becomes visible
  And I expect that element "#a-new-era-of-cloud-computing-services-powered-by-blockchain-technology-" matches the text "A new era of cloud computing services, powered by blockchain technology."
