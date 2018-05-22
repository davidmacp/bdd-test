Feature: Home Page - Introduction section

  As a user on the DADI.cloud home page they are able to view the Introduction section

Scenario: The Introduction section is visible
  Given I open the url "/"

Scenario: DADI logo visible
  Then I expect that element "body > header" becomes visible

Scenario: Introduction is visible
  Then I expect that element "#a-new-era-of-cloud-computing-services-powered-by-blockchain-technology-" becomes visible
  And I expect that element "#a-new-era-of-cloud-computing-services-powered-by-blockchain-technology-" matches the text "A new era of cloud computing services, powered by blockchain technology."
