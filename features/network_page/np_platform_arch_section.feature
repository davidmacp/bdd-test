Feature: Network Page - Platform architecture

  As a user on the DADI.cloud Network page they should be able to view the Platform Architecture section

Background:
  Given I open the url "http://beta2.dadi.cloud/en/network"
  When I scroll to element "#architecture > h3 > span"

Scenario: Check Platform Architecture title is visible
  Then I expect that header "#architecture > h3 > span" matches the text "PLATFORM ARCHITECTURE"

Scenario: Check there is a Smart contracts box with icon, title and description
  Then I expect that element "body > main > div > div:nth-child(2) > div:nth-child(1) > img" is visible
  And I expect that element "body > main > div > div:nth-child(2) > div:nth-child(1) > h2" matches the text "Smart contracts"
  And I expect that element "body > main > div > div:nth-child(2) > div:nth-child(1) > p" matches the text "Ethereum Smart Contracts as a consensus system, ensures transparency and security for network participants."

Scenario: Check there is a Fog computing box with icon, title and description
  Then I expect that element "body > main > div > div:nth-child(2) > div:nth-child(2) > img" is visible
  And I expect that element "body > main > div > div:nth-child(2) > div:nth-child(2) > h2" matches the text "Fog computing"
  And I expect that element "body > main > div > div:nth-child(2) > div:nth-child(2) > p" matches the text "A decentralized and more efficient computing model compared to traditional cloud platforms."

Scenario: Check there is a Protocol buffers box with icon, title and description
  Then I expect that element "body > main > div > div:nth-child(2) > div:nth-child(3) > img" is visible
  And I expect that element "body > main > div > div:nth-child(2) > div:nth-child(3) > h2" matches the text "Protocol buffers"
  And I expect that element "body > main > div > div:nth-child(2) > div:nth-child(3) > p" matches the text "Fast data serialisation method used to optimise the network."

Scenario: Check there is a Docker box with icon, title and description
  Then I expect that element "body > main > div > div:nth-child(3) > div:nth-child(1) > img" is visible
  And I expect that element "body > main > div > div:nth-child(3) > div:nth-child(1) > h2" matches the text "Docker"
  And I expect that element "body > main > div > div:nth-child(3) > div:nth-child(1) > p" matches the text "An isolated environment ensuring computing parallelism and security for Consumer app bundles."

Scenario: Check there is a GRPC box with icon, title and description
  Then I expect that element "body > main > div > div:nth-child(3) > div:nth-child(2) > img" is visible
  And I expect that element "body > main > div > div:nth-child(3) > div:nth-child(2) > h2" matches the text "GRPC"
  And I expect that element "body > main > div > div:nth-child(3) > div:nth-child(2) > p" matches the text "A technology for distributing procedures across multiple hosts."

Scenario: Check there is a ZooKeeper box with icon, title and description
  Then I expect that element "body > main > div > div:nth-child(3) > div:nth-child(3) > img" is visible
  And I expect that element "body > main > div > div:nth-child(3) > div:nth-child(3) > h2" matches the text "ZooKeeper"
  And I expect that element "body > main > div > div:nth-child(3) > div:nth-child(3) > p" matches the text "A peer-to-peer technology for node communication and distributed synchronization."
