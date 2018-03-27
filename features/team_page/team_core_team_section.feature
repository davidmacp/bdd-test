Feature: Team Page - Core Team check

  As a user on the DADI.cloud Team page they should be able to view profiles of all the Core Team

Background:
  Given I open the url "http://beta2.dadi.cloud/en/team"
  When I scroll to element "body > main > div > div:nth-child(1) > h3 > span"

Scenario: Check Core Team title is correct
  Then I expect that element "body > main > div > div:nth-child(1) > h3 > span" matches the text "CORE TEAM"

Scenario: There are 16 Core Team member boxes visible
  Then there should be 16 Core Team member boxes visible

Scenario: There are 16 Core Team member images visible
  Then there should be 16 Core Team member images visible

Scenario: There are 16 Core Team member names visible
  Then there should be 16 Core Team member names visible

Scenario: There are 16 Core Team member titles visible
  Then there should be 16 Core Team member titles visible