Feature: Roadmap Page - Description check

  As a user on the DADI.cloud Roadmap page they should be able to view the page description

Scenario: Check page header and description are visible
  Given I open the url "http://beta2.dadi.cloud/en/roadmap"
  Then I expect that element "body > header > div > h1" contains the text "Roadmap"
  And I expect that element "body > header > div > div.cf > p" matches the text "This is a high level roadmap for the twelve months post-Crowdsale. Timings are dependent on the scale of success of the Crowdsale and reflect the DADI team’s ambition: the more funds raised, the faster and further the team will be able to travel."
