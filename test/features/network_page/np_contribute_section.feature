Feature: Network Page - Be part of the network section

  As a user on the DADI.cloud Network page they should be able to view the Be part of the network section

Background:
  Given I open the url "/network"
  When I scroll to element "#contribute > h3 > span"

Scenario: Check Be part of the network title is visible
  Then I expect that header "#contribute > h3 > span" matches the text "BE PART OF THE NETWORK"

Scenario: Check section description
  Then I expect that element "body > main > div > p" matches the text "If you have spare computational power, DADI is a great application of your resource, delivering real world services for individuals, businesses and governments, whilst delivering income for you."

Scenario: Check there is a Stargates box with title, description and Learn more link
  Then I expect that element "body > main > div > div.cols.cols--3.mb > a:nth-child(1) > div" is visible
  And I expect that element "body > main > div > div.cols.cols--3.mb > a:nth-child(1) > div > h2" matches the text "Stargates"
  And I expect that element "body > main > div > div.cols.cols--3.mb > a:nth-child(1) > div > p" matches the text "Provide domain routing and negotiate rates with Consumers."
  And I expect that element "body > main > div > div.cols.cols--3.mb > a:nth-child(1) > div > div > span" matches the text "Learn more"

Scenario: Check there is a Gateways box with title, description and Learn more link
  Then I expect that element "body > main > div > div.cols.cols--3.mb > a:nth-child(2) > div" is visible
  And I expect that element "body > main > div > div.cols.cols--3.mb > a:nth-child(2) > div > h2" matches the text "Gateways"
  And I expect that element "body > main > div > div.cols.cols--3.mb > a:nth-child(2) > div > p" matches the text "Act as network aggregation points for Host capacity and negotiate rates with Hosts."
  And I expect that element "body > main > div > div.cols.cols--3.mb > a:nth-child(2) > div > div > span" matches the text "Learn more"

Scenario: Check there is a Hosts box with title, description and Learn more link
  Then I expect that element "body > main > div > div.cols.cols--3.mb > a:nth-child(3) > div" is visible
  And I expect that element "body > main > div > div.cols.cols--3.mb > a:nth-child(3) > div > h2" matches the text "Hosts"
  And I expect that element "body > main > div > div.cols.cols--3.mb > a:nth-child(3) > div > p" matches the text "Provide processing power for multiple Consumer app bundles."
  And I expect that element "body > main > div > div.cols.cols--3.mb > a:nth-child(3) > div > div > span" matches the text "Learn more"