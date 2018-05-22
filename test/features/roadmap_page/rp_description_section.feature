Feature: Roadmap Page - Description check

  As a user on the DADI.cloud Roadmap page they should be able to view the page description

Scenario: Check page header and description are visible
  Given I open the url "/roadmap"
  Then I expect that element "body > header > div > h1" contains the text "Roadmap"
  And I expect that element "body > header > div > p.normal" matches the text "This is a high level roadmap for the twelve months post-Crowdsale. Timings are dependent on the scale of success of the Crowdsale and reflect the DADI team’s ambition: the more funds raised, the faster and further the team will be able to travel."

Scenario: Check Show roadmap archive link is visible and works correctly
  When I click on the link "Show roadmap archive"
  Then I expect that element "#stick > div > dl:nth-child(1) > dt" contains the text "2017"
  And I expect that the title is "Roadmap | DADI"
