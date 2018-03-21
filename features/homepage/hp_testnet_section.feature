Feature: Home Page - Testnet section

  As a user on the DADI.cloud home page they are able to view and interact with The Testnet section

Background:
  Given I open the url "http://beta2.dadi.cloud/en"
  When I scroll to element "#stickContainer .col:nth-of-type(2) .hdr"

Scenario: The Testnet section is labelled correctly
  Then I expect that header "#stickContainer .col:nth-of-type(2) .hdr" matches the text "THE TESTNET"

Scenario: There is a world map displayed
  Then I expect that element "#map" is visible

Scenario: Has a box for average response time
  Then I expect that header "#stick .col:nth-of-type(1) .stat" contains the text "Av. response time"
  And I expect that element "#average_response" does appear exactly "1" times

Scenario: Has a box for Concurrent requests
  Then I expect that header "#stick .col:nth-of-type(2)" contains the text "Concurrent requests"
  And I expect that element "#network_reqs" does appear exactly "1" times

Scenario: Has a box for hosts
  Then I expect that header "#stick .col:nth-of-type(3)" contains the text "Hosts"
  And I expect that element "#network_hosts" does appear exactly "1" times

Scenario: Testnet section has a 'About the network →' link
  Then I expect that element "#stick > div:nth-child(1) > a" matches the text "About the network →"
  When I click on the element "#stick > div:nth-child(1) > a"
  And I pause for 750ms
  Then I expect that the path is "/en/network/"
