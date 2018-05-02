Feature: Network Page - Description check

  As a user on the DADI.cloud Network page they should be able to view the page title and description

Scenario: Open Network Page
  Given I open the url "/network"

Scenario: Check page header and description are visible
  Then I expect that element "body > header > div.cnt.mb > div:nth-child(1) > div > h1" contains the text "Network"
  And I expect that element "body > header > div.cnt.mb > div:nth-child(1) > div > p.normal.mb" matches the text "DADI is a global, decentralized cloud platform with a suite of web services to help you build, launch and grow your digital products."

Scenario: Check full platform overview is visible and works correctly
  When I click on the link "Full platform overview"
  Then I expect that element "body > header > div > div > div > a" becomes visible
  And I expect that the title is "Platform overview | DADI"
