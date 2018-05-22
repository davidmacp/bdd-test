Feature: Network Page - Testnet status

  As a user on the DADI.cloud Network page they should be able to view the testnet status section

Scenario: Open Network Page
  Given I open the url "/network"

Scenario: Check testnet status title is visible
  When I scroll to element "body > header > nav"
  Then I expect that header "body > header > div.cnt.mb.cf > div.network-stats.fm > div:nth-child(1) > div.badge__primary" matches the text "TESTNET STATUS"

Scenario: Check average response time title is visible
  When I scroll to element "body > header > nav"
  Then I expect that header "body > header > div.cnt.mb.cf > div.network-stats.fm > div:nth-child(2) > div.badge__primary" contains the text "Av. response time"
  And I expect that element "#average_response" does appear exactly "1" times

Scenario: Check concurrent requests title is visible
  When I scroll to element "body > header > nav"
  Then I expect that header "body > header > div.cnt.mb.cf > div.network-stats.fm > div:nth-child(3) > div.badge__primary" contains the text "Concurrent requests"
  And I expect that element "#concurrent_requests" does appear exactly "1" times

Scenario: Check Hosts online title is visible
  When I scroll to element "body > header > nav"
  Then I expect that header "body > header > div.cnt.mb.cf > div.network-stats.fm > div:nth-child(4) > div.badge__primary" contains the text "Hosts online"
  And I expect that element "#host_count" does appear exactly "1" times

Scenario: Check map is visible
  When I scroll to element "body > header > div.cnt.mb > div:nth-child(1)"
  Then I expect that element "#map" is visible
