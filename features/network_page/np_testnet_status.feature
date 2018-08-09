Feature: Network Page - Testnet status

  As a user on the DADI.cloud Network page they should be able to view the testnet status section

Background:
  Given I open the url "http://beta2.dadi.cloud/en/network"

Scenario: Check testnet status title is visible
  When I scroll to element "body > header > nav"
  Then I expect that header "body > header > nav > div > ul > li.nav--right > div:nth-child(1) > div" matches the text "TESTNET STATUS"

Scenario: Check concurrent requests title is visible
  When I scroll to element "body > header > nav"
  Then I expect that header "body > header > nav > div > ul > li.nav--right > div:nth-child(2) > div" contains the text "Concurrent requests"
  And I expect that element "#network_reqs" does appear exactly "1" times

Scenario: Check Hosts online title is visible
  When I scroll to element "body > header > nav"
  Then I expect that header "body > header > nav > div > ul > li.nav--right > div:nth-child(3) > div" contains the text "Hosts online"
  And I expect that element "#network_hosts" does appear exactly "1" times

Scenario: Check map is visible
  When I scroll to element "body > header > div.cnt.mb > div:nth-child(1)"
  Then I expect that element "#map" is visible
