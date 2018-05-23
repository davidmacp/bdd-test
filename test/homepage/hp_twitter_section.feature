Feature: Home Page - Twitter Section

  As a user on the DADI.cloud Home page they should be able to view and interact with the Twitter section

Scenario: Scroll to 'Twitter section'
  Given I open the url "/"
  When I scroll to element "#homeMain > div.cnt.pt > div:nth-child(3) > h3 > span > a"

Scenario: Check Twitter section description
  Then I expect that element "#homeMain > div.cnt.pt > div:nth-child(3) > h3 > span > a" contains the text "FOLLOW US ON TWITTER @DADI"

Scenario: Check there are 4 Twitter boxes
  Then there should be 4 Twitter boxes visible

Scenario: Check there are 4 'Reply' icons
  Then there should be 4 Reply icons visible

Scenario: Check there are 4 'Retweet' icons
  Then there should be 4 Retweet icons visible

Scenario: Check there are 4 'Favourite' icons
  Then there should be 4 Favourite icons visible

Scenario: Check there are 4 'Tweet' dates
  Then there should be 4 Tweet dates visible
