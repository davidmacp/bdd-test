Feature: Community Page - Knowledge section

  As a user on the DADI.network Community page they are able to view and interact with the Knowledge section

Scenario: Scroll to 'Knowledge Section'
  Given I open the url "/community"
  When I scroll to element "body > main > div:nth-child(3) > div > h2"

Scenario: Check Knowledge title is visible
  Then I expect that element "body > main > div:nth-child(3) > div > h2" matches the text "Knowledge"

Scenario: There is at least 1 Knowledge article box displayed
  Then I expect that there is at least 1 article box visible in the Knowledge section

Scenario: Knowledge section has a 'All knowledge' link
  Then there should be an "All knowledge" link visible
