Feature: Knowledge Page - Latest Articles section

  As a user on the DADI.cloud Knowledge page they are able to view and interact with the Latest Articles section

Scenario: Scroll to 'Latest Articles Section'
  Given I open the url "/knowledge"
  When I scroll to element "body > main > div > div.hdr > h3 > span"

Scenario: Check Latest Article title is visible
  Then I expect that element "body > main > div > div.hdr > h3 > span" matches the text "LATEST ARTICLES"

Scenario: There are 12 Latest Article boxes
  Then there should be 12 Latest Article boxes displayed

Scenario: Each Latest Article box has a badge
  Then there should be 12 Latest Article badges visible

Scenario: Each Latest Article box has a title
  Then there should be 12 Latest Article titles visible in the boxes

Scenario: Each Latest Article box has a description text
  Then there should be 12 Latest Article box descriptions displayed

Scenario: Each Latest Article has a footer that contains a date, a team member name and an image
  Then there should be 12 valid dates in the footer
  And there should be 12 team member names in the footer
  And there should be 12 team member images in the footer

Scenario: Latest Article section has a 'Next →' link
  Then there should be a "Next →" link visible at the end of this section
