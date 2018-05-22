Feature: Community Page - Updates section

  As a user on the DADI.network Community page they are able to view and interact with the Updates section

Scenario: Scroll to 'Updates Section'
  Given I open the url "/community"
  When I scroll to element "body > main > div:nth-child(2) > div > h2"

Scenario: Check Updates title is visible
  Then I expect that element "body > main > div:nth-child(2) > div > h2" matches the text "Updates"

Scenario: There is at least 1 Updates article box displayed
  Then I expect that there is at least 1 article box visible in the updates section

Scenario: Updates section has an 'All updates' link
  Then there should be an "All updates" link available
