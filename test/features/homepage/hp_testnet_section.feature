Feature: Testnet section

  As a user on the DADI.cloud home page they are able to view and interact with The Testnet section

Scenario: The Testnet section is labelled correctly
  Given I open the url "/"
  When I scroll to element "#stickContainer .col:nth-of-type(2) .hdr"
  Then I expect that header "#stickContainer .col:nth-of-type(2) .hdr" matches the text "THE TESTNET"

Scenario: There is a world map displayed
  Then I expect that element "#map" is visible

Scenario: Has a box for average response time
  Then I expect that header "#stick .col:nth-of-type(1) .stat" contains the text "Av. response time"
  And I expect that element "#average_response" does appear exactly "1" times

Scenario: Has a box for Concurrent requests
  Then I expect that header "#stick .col:nth-of-type(2)" contains the text "Concurrent requests"
  And I expect that element "#concurrent_requests" does appear exactly "1" times

Scenario: Has a box for hosts
  Then I expect that header "#stick .col:nth-of-type(3)" contains the text "Hosts"
  And I expect that element "#host_count" does appear exactly "1" times

Scenario: Testnet section has a 'About the network →' link
  Then I expect there is an "About the network →" link
