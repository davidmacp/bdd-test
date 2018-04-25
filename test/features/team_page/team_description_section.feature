Feature: Team Page - Description check

  As a user on the DADI.cloud Team page they should be able to view the page title and description

Background:
  Given I open the url "/en/team"

Scenario: Check page header and description are visible
  Then I expect that element "body > header > div > h1" contains the text "The Team"
  And I expect that element "body > header > div > p" matches the text "DADI has assembled a world class engineering, strategic and design team with over 300 years of collective experience. The team is 18 strong – all full time. DADI today represents the culminiation of four years of R&D by the team and $2 million of direct investment by the founders."
