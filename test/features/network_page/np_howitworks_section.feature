Feature: Network Page - How it works

  As a user on the DADI.cloud Network page they should be able to view the How it works section

Scenario: Scroll to 'How it works section'
  Given I open the url "/network"
  When I scroll to element "#how > h3 > span"

Scenario: Check How it works title is visible
  Then I expect that header "#how > h3 > span" matches the text "HOW IT WORKS"

Scenario: Check there is a Network diagram
  Then I expect that element "body > main > div:nth-child(3) > div:nth-child(2) > img.fill.block.bs-hide" is visible
