Feature: Latest Knowledge section

  As a user on the DADI.cloud home page they are able to view and interact with the Latest Knowledge section

Scenario: The Latest Knowledge section is labelled correctly
  Given I open the url "http://beta2.dadi.cloud/en"
  When I scroll to element "#homeMain > div.cnt > div:nth-child(3) > h3 > span"
  Then I expect that header "#homeMain > div.cnt > div:nth-child(3) > h3 > span" matches the text "LATEST KNOWLEDGE ARTICLES"

Scenario: 4 articles showing
  Then there should be 4 Latest Knowledge articles visible

Scenario: Each article has a primary badge
  Then there should be 4 primary badges

Scenario: Each article has a clickable title and description below it
  Then there should be 4 clickable article titles
  And 4 article descriptions

Scenario: Each article has a footer that contains a date, a team member name and an image
  Then there should be 4 valid dates
  And there should be 4 team member names
  And there should be 4 team member images
