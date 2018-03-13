Feature: Roadmap section

  As a user on the DADI.cloud home page they are able to view and interact with the Roadmaps section

Scenario: Roadmap Update section labelled
  Given I am on the DADI.cloud homepage
  When the user scrolls to the Roadmap Updates section
  Then the title "ROADMAP UPDATES" should be displayed
  Then I expect that header "#stickContainer .col:nth-of-type(1) .hdr" matches the text "ROADMAP UPDATES"
  Then the element "//span[text()='Roadmap updates']" is visible

Scenario: 6 articles showing
  Then there should be 6 Roadmap update articles visible

Scenario: Each article has a primary badge
  Then there should be 6 primary Roadmap badges

Scenario: Each primary badge should be a link to the Roadmap page
  Then there should be 6 clickable primary Roadmap badges to the Roadmap page

Scenario: Each article has a secondary badge
  Then there should be 6 secondary badges

Scenario: Each article has a clickable title and description below it
  Then there should be 6 clickable article titles
  And 6 article descriptions

Scenario: Each article has a footer that contains a date, a team member name and an image
  Then there should be 6 valid dates
  And there should be 6 team member names
  And there should be 6 team member images

Scenario: Roadmap section has a 'View all updates' link
  Then there should be a "View all updates →" link
