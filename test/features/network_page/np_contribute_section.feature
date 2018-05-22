Feature: Network Page - Be part of the network section

  As a user on the DADI.cloud Network page they should be able to view the Be part of the network section

Scenario: Scroll to 'Be part of the network section'
  Given I open the url "/network"
  When I scroll to element "#contribute > h3 > span"

Scenario: Check Be part of the network title is visible
  Then I expect that header "#contribute > h3 > span" matches the text "BE PART OF THE NETWORK"

Scenario: Check section description
  Then I expect that element "body > main > div > p" matches the text "If you have spare computational power, DADI is a great application of your resource, delivering real world services for individuals, businesses and governments, whilst delivering income for you."

Scenario: Check there is a Stargates box with title, description and Learn more link
  Then I expect that element "body > main > div:nth-child(1) > div.cols > div:nth-child(1)" is visible
  And I expect that element "body > main > div:nth-child(1) > div.cols > div:nth-child(1) > div > h2" matches the text "Stargate"
  And I expect that element "body > main > div:nth-child(1) > div.cols > div:nth-child(1) > div > p" matches the text "DADI Stargate provides intelligent routing for dapps, as well securing the network and providing the interface for DADI's smart contract layer, handling rate negotiation and payouts."

Scenario: Check there is a Gateways box with title, description and Learn more link
  Then I expect that element "body > main > div:nth-child(1) > div.cols > div:nth-child(2)" is visible
  And I expect that element "body > main > div:nth-child(1) > div.cols > div:nth-child(2) > div > h2" matches the text "Gateway"
  And I expect that element "body > main > div:nth-child(1) > div.cols > div:nth-child(2) > div > p" matches the text "DADI Gateway is the entry point to the DADI network. It bridges end users and task response through the maintenance of a job queue for Hosts and handles caching at object level."

Scenario: Check there is a Hosts box with title, description and Learn more link
  Then I expect that element "body > main > div:nth-child(1) > div.cols > div:nth-child(3)" is visible
  And I expect that element "body > main > div:nth-child(1) > div.cols > div:nth-child(3) > div > h2" matches the text "Host"
  And I expect that element "body > main > div:nth-child(1) > div.cols > div:nth-child(3) > div > p" matches the text "DADI Host is the workhorse of the DADI network. It runs individual DADI web services in secure containers and connects in to the job queue that is maintained by DADI Gateway, requesting and responding to tasks."
