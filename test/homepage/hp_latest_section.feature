Feature: Home Page - Latest from DADI section

  As a user on the DADI.cloud home page they are able to view and interact with the Latest from DADI section

Scenario: Latest from DADI section labelled
  Given I open the url "/"
  When the user scrolls to the Latest from DADI section
  #Then the title "ROADMAP UPDATES" should be displayed
  Then I expect that header "#stickContainer > div:nth-child(1) > div.hdr > h3 > span" matches the text "LATEST FROM DADI"
  #Then the element "//span[text()='Roadmap updates']" is visible

Scenario: 6 articles showing
  Then there should be 6 Latest articles visible

Scenario: Each article has a primary badge
  Then there should be 6 primary badges

# Scenario: Each primary badge should be a link to the relevant page
#   Then there should be 6 clickable primary badges

Scenario: Each article has a secondary badge
  Then there should be 6 secondary badges

Scenario: Each article has a clickable title and description below it
  Then there should be 6 clickable article titles
  And 6 article descriptions

Scenario: Each article has a footer that contains a date, a team member name and an image
  Then there should be 6 valid dates
  # And there should be 6 team member names
  # And there should be 6 team member images

Scenario: Latest from DADI section has a 'More articles' link
  Then there should be a "More articles" link
