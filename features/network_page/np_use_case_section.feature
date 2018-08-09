Feature: Network Page - What can it be used for? section

  As a user on the DADI.cloud Network page they should be able to view the What can it be used for? section

Background:
  Given I open the url "http://beta2.dadi.cloud/en/network"
  When I scroll to element "#usecases > h3 > span"

Scenario: Check What can it be used for? title is visible
  Then I expect that header "#usecases > h3 > span" matches the text "WHAT CAN IT BE USED FOR?"

Scenario: 11 Use case boxes showing
  Then there should be 11 Use case boxes visible

Scenario: Each box has an image icon displayed
  Then there should be 11 image icons visible

Scenario: Each box has a header title visible
  Then there should be 11 header titles visible

Scenario: Each box has a description text
  Then there should be 11 box descriptions visible

Scenario: Each of the boxes has a 'Learn more' link
  Then there should be 11 "Learn more" links visible

Scenario: Use case section has a 'Read all use cases →' link
  Then there should be a "Read all use cases →" link available
