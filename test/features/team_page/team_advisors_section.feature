Feature: Team Page - Advisors check

  As a user on the DADI.cloud Team page they should be able to view profiles of all the Advisors

Scenario: Scroll to 'Advisors Section'
  Given I open the url "/team"
  When I scroll to element "body > main > div > div:nth-child(3) > h3 > span"

Scenario: Check Advisors title is correct
  Then I expect that element "body > main > div > div:nth-child(3) > h3 > span" matches the text "ADVISORS"

Scenario: There is at least 1 Advisor box visible
  Then there should be at least 1 Advisor box visible

Scenario: There is at least 1 Advisor image visible
  Then there should be at least 1 Advisor image visible

Scenario: There is at least 1 Advisor name visible
  Then there should be at least 1 Advisor name visible
