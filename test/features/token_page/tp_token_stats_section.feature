Feature: Token Page - Token Stats check

  As a user on the DADI.cloud Token page they should be able to view a snapshot of all the current token statistics

Scenario: Scroll to 'Token Stats Section'
  Given I open the url "/en/token"
  When I scroll to element "body > header > div.cnt > div.grid"

Scenario: Check Token value box displays correctly
  Then I expect that element "body > header > div.cnt > div.grid > div:nth-child(1) > div > div:nth-child(1)" matches the text "Token value"
  And I expect that element "body > header > div.cnt.pb > div.grid > div:nth-child(1) > div > div.stat__figure" contains the text "$"
  And I expect that element "body > header > div.cnt.pb > div.grid > div:nth-child(1) > div > div:nth-child(3)" contains the text "BTC"
  And I expect that element "body > header > div.cnt.pb > div.grid > div:nth-child(1) > div > div:nth-child(3)" contains the text "ETH"

Scenario: Check Market cap box displays correctly
  Then I expect that element "body > header > div.cnt > div.grid > div:nth-child(2) > div > div:nth-child(1)" matches the text "Market cap"
  And I expect that element "body > header > div.cnt.pb > div.grid > div:nth-child(2) > div > div.stat__figure" contains the text "$"
  And I expect that element "body > header > div.cnt.pb > div.grid > div:nth-child(2) > div > div:nth-child(3)" contains the text "BTC"
  And I expect that element "body > header > div.cnt.pb > div.grid > div:nth-child(2) > div > div:nth-child(3)" contains the text "ETH"

Scenario: Check 24 hour volume box displays correctly
  Then I expect that element "body > header > div.cnt > div.grid > div:nth-child(3) > div > div:nth-child(1)" matches the text "24 hour volume"
  And I expect that element "body > header > div.cnt.pb > div.grid > div:nth-child(3) > div > div.stat__figure" contains the text "$"
  And I expect that element "body > header > div.cnt.pb > div.grid > div:nth-child(3) > div > div:nth-child(3)" contains the text "BTC"
  And I expect that element "body > header > div.cnt.pb > div.grid > div:nth-child(3) > div > div:nth-child(3)" contains the text "ETH"

Scenario: Check Circulating supply box displays correctly
  Then I expect that element "body > header > div.cnt > div.grid > div:nth-child(4) > div > div:nth-child(1)" matches the text "Circulating supply"
  And I expect that element "body > header > div.cnt.pb > div.grid > div:nth-child(4) > div > div.stat__figure" is not empty
  And I expect that element "body > header > div.cnt.pb > div.grid > div:nth-child(4) > div > div:nth-child(3)" contains the text "Total supply"
  And I expect that element "body > header > div.cnt.pb > div.grid > div:nth-child(4) > div > div:nth-child(3)" contains the text "100,000,000"

Scenario: Check Token volume graph is visible
  Then I expect that element "#token" is visible
  And I expect that element "body > header > div.cnt > span:nth-child(3)" matches the text "Price in ETH"
  And I expect that element "body > header > div.cnt > span:nth-child(2)" matches the text "Price in BTC"

Scenario: Check Stats disclaimer is visible
  Then I expect that element "body > header > div.cnt > div.fm" is visible
  And I expect that element "body > header > div.cnt > div.fm" matches the text "Stats updated hourly"
