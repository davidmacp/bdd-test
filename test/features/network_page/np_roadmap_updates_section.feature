Feature: Network Page - Roadmap Updates section

  As a user on the DADI.cloud Network page they are able to view and interact with the Roadmap Updates section

Background:
  Given I open the url "/network"
  When I scroll to element "body > header > div.cnt > div.hdr > h3 > span"

Scenario: Roadmap Updates section labelled - Network Page
  Then I expect that header "body > header > div.cnt > div.hdr > h3 > span" matches the text "ROADMAP UPDATES"

Scenario: There is at least 1 article box displayed
  Then I expect that there is at least 1 article box visible in the roadmap updates section
