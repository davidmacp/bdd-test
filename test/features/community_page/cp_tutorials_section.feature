Feature: Community Page - Tutorials section

  As a user on the DADI.network Community page they are able to view and interact with the Tutorials section

Scenario: Scroll to 'Tutorials Section'
  Given I open the url "/community"
  When I scroll to element "body > main > div:nth-child(1) > div > h2"

Scenario: Check Tutorials title is visible
  Then I expect that element "body > main > div:nth-child(1) > div > h2" matches the text "Tutorials"

Scenario: There are 4 Tutorial Article boxes
  Then there should be 4 Tutorial Article boxes displayed

Scenario: Each Tutorial Article box has a badge
  Then there should be 4 Tutorial Article badges visible

Scenario: Each Tutorial Article box has a title
  Then there should be 4 Tutorial Article titles visible in the boxes

Scenario: Each Tutorial Article box has a description text
  Then there should be 4 Tutorial Article box descriptions displayed

Scenario: Each Tutorial Article has a footer that contains a date, a team member name and an image
  Then there should be 4 valid dates in the footer
  And there should be 4 team member names in the footer
  And there should be 4 team member images in the footer

Scenario: Tutorials section has an 'All tutorials' link
  Then there should be an "All tutorials" link displayed
