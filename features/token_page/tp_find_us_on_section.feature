Feature: Token Page - Find Us On check

  As a user on the DADI.cloud Token page they should be able to view the Find Us On section

Background:
  Given I open the url "http://beta2.dadi.cloud/en/token"
  When I scroll to element "body > main > div > div:nth-child(3) > h3 > span"

Scenario: Check Find Us On title is correct
  Then I expect that element "body > main > div > div:nth-child(3) > h3 > span" matches the text "FIND US ON"

Scenario: The link to CobinHood should open in a new tab
  And I click on the link "CobinHood"
  Then I expect the url "https://cobinhood.com/trade/DADI-BTC" is opened in a new tab

Scenario: The link to Coin Falcon should open in a new tab
  And I click on the link "Coin Falcon"
  Then I expect the url "https://coinfalcon.com/advanced-view/DADI-BTC" is opened in a new tab

Scenario: The link to Gate.io should open in a new tab
  And I click on the link "Gate.io"
  Then I expect the url "https://gate.io/trade/DADI_ETH" is opened in a new tab

Scenario: The link to IDEX should open in a new tab
  And I click on the link "IDEX"
  Then I expect the url "https://idex.market/eth/dadi" is opened in a new tab

Scenario: The link to EthBits should open in a new tab
  And I click on the link "EthBits"
  Then I expect the url "https://www.ethbits.com/" is opened in a new tab

Scenario: The link to CoinMarketCap should open in a new tab
  And I click on the link "CoinMarketCap"
  Then I expect the url "https://coinmarketcap.com/currencies/dadi/" is opened in a new tab

Scenario: The link to CoinGecko should open in a new tab
  And I click on the link "CoinGecko"
  Then I expect the url "https://www.coingecko.com/en/price_charts/dadi/usd" is opened in a new tab
