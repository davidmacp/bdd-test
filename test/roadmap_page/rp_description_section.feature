Feature: Roadmap Page - Description check

  As a user on the DADI.cloud Roadmap page they should be able to view the page description

Scenario: Check page header and description are visible
  Given I open the url "/roadmap"
  Then I expect that element "body > header > div > h1" contains the text "Roadmap"
  And I expect that element "body > header > div > p.normal" matches the text "A high level roadmap for DADI technology, showing development milestones for both network and web services."

Scenario: Check Show roadmap archive link is visible and works correctly
  When I click on the link "Show roadmap archive"
  Then I expect that element "#stick > div > dl:nth-child(1) > dt" contains the text "2017"
  And I expect that the title is "Roadmap | DADI"
