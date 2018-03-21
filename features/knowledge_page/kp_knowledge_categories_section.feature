Feature: Knowledge Page - Title and Knowledge Categories section

  As a user on the DADI.cloud Knowledge page they are able to view and interact with the Knowledge Categories section

Background:
  Given I open the url "http://beta2.dadi.cloud/en/knowledge"
  When I scroll to element "body > header > div > h1"

Scenario: Check page header and description are visible
  Then I expect that element "body > header > div > h1" matches the text "Knowledge"
  And I expect that element "body > header > div > p" matches the text "Insights and knowledge from our team."

Scenario: There are 5 Knowledge Category boxes
  Then there should be 5 Knowledge Category boxes displayed

Scenario: Each box has a description text
  Then there should be 5 box descriptions displayed

Scenario: Each box has a 'Learn more' link
  Then there should be 5 "Learn more" links visible in the boxes

Scenario: There is a clickable box for Concepts
  Then I expect that element "body > header > div > div > div:nth-child(1)" does exist
  And I expect that element "body > header > div > div > div:nth-child(1) > a > div.box__inner > h2" contains the text "Concepts"
  And there should be an image icon for Concepts visible

Scenario: There is a clickable box for FAQ
  Then I expect that element "body > header > div > div > div:nth-child(2)" does exist
  And I expect that element "body > header > div > div > div:nth-child(2) > a > div.box__inner > h2" contains the text "FAQ"
  And there should be an image icon for FAQ visible

Scenario: There is a clickable box for Network
  Then I expect that element "body > header > div > div > div:nth-child(3)" does exist
  And I expect that element "body > header > div > div > div:nth-child(3) > a > div.box__inner > h2" contains the text "Network"
  And there should be an image icon for Network visible

Scenario: There is a clickable box for Security
  Then I expect that element "body > header > div > div > div:nth-child(4)" does exist
  And I expect that element "body > header > div > div > div:nth-child(4) > a > div.box__inner > h2" contains the text "Security"
  And there should be an image icon for Security visible

Scenario: There is a clickable box for Tutorials
  Then I expect that element "body > header > div > div > div:nth-child(5)" does exist
  And I expect that element "body > header > div > div > div:nth-child(5) > a > div.box__inner > h2" contains the text "Tutorials"
  And there should be an image icon for Tutorials visible
