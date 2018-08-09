Feature: Home Page - Web Services section

  As a user on the DADI.cloud home page they are able to view and interact with the Web Services section

Background:
  Given I open the url "http://beta2.dadi.cloud/en"
  When I scroll to element "#homeMain > div.cnt .hdr"
@watch
Scenario: The Web Services section is labelled correctly
  Then I expect that header "#homeMain > div.cnt > .hdr:nth-of-type(1)" matches the text "WEB SERVICES"
@watch
Scenario: 11 Web Services boxes showing
  Then there should be 11 Web services boxes visible
@ignore
Scenario: Each box has a header title
  Then there should be 11 header titles
@ignore
Scenario: Each box has a description text
  Then there should be 11 box descriptions
@ignore
Scenario: Each box has an image icon displayed
  Then there should be 11 image icons displayed
@ignore
Scenario: Each of the current core product boxes has a 'Learn more' link
  Then there should be 5 "Learn more" links in the core products boxes
@ignore
Scenario: Each of the current core product boxes has a 'Latest updates' link
  Then there should be 5 Latest updates links in the core products boxes
@ignore
Scenario: Each of the current core product boxes has a 'How to install' link
  Then there should be 5 "How to install" links in the core products boxes
@ignore
Scenario: Each of the future core product boxes has a 'Coming soon' text
  Then there should be 6 "Coming soon" text in the future core products boxes
