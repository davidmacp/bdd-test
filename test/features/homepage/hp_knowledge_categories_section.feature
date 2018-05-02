Feature: Home Page - Knowledge Categories section

  As a user on the DADI.cloud home page they are able to view and interact with the Knowledge Categories section

Scenario: The Knowledge Categories section is labelled correctly
  Given I open the url "/"
  When I scroll to element "#homeMain > div.cnt > div:nth-child(5) > h3 > span"
  Then I expect that header "#homeMain > div.cnt > div:nth-child(5) > h3 > span" matches the text "KNOWLEDGE CATEGORIES"

Scenario: There are 5 Knowledge Category boxes
  Then there should be 5 Knowledge Category boxes visible

Scenario: Each box has a description text
  Then there should be 5 box descriptions

Scenario: Each box has a 'Learn more' link
  Then there should be 5 "Learn more" links in the boxes

Scenario: There is a clickable box for Concepts
  Then I expect that element "#homeMain > div.cnt > div.cols > a:nth-child(1)" does exist
  And I expect that element "#homeMain > div.cnt > div.cols > a:nth-child(1) > div.box__inner > h2" contains the text "Concepts"
  And there should be an image icon for Concepts

Scenario: There is a clickable box for FAQ
  Then I expect that element "#homeMain > div.cnt > div.cols > a:nth-child(2)" does exist
  And I expect that element "#homeMain > div.cnt > div.cols > a:nth-child(2) > div.box__inner > h2" contains the text "FAQ"
  And there should be an image icon for FAQ

Scenario: There is a clickable box for Network
Then I expect that element "#homeMain > div.cnt > div.cols > a:nth-child(3)" does exist
And I expect that element "#homeMain > div.cnt > div.cols > a:nth-child(3) > div.box__inner > h2" contains the text "Network"
  And there should be an image icon for Network

Scenario: There is a clickable box for Security
Then I expect that element "#homeMain > div.cnt > div.cols > a:nth-child(4)" does exist
And I expect that element "#homeMain > div.cnt > div.cols > a:nth-child(4) > div.box__inner > h2" contains the text "Security"
  And there should be an image icon for Security

Scenario: There is a clickable box for Tutorials
Then I expect that element "#homeMain > div.cnt > div.cols > a:nth-child(5)" does exist
And I expect that element "#homeMain > div.cnt > div.cols > a:nth-child(5) > div.box__inner > h2" contains the text "Tutorials"
  And there should be an image icon for Tutorials

Scenario: Knowledge Categories section has a 'View all knowledge →' link
  Then there should be a "View all knowledge →" link displayed
