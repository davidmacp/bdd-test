Feature: Token Page - Find Us On check

  As a user on the DADI.cloud Token page they should be able to view the Find Us On section

Background:
  Given I open the url "/en/token"
  When I scroll to element "body > main > div > div:nth-child(3) > h3 > span"

Scenario: Check Find Us On title is correct
  Then I expect that element "body > main > div > div:nth-child(3) > h3 > span" matches the text "FIND US ON"

Scenario: There should be a link to CobinHood
  Then I expect that the attribute "href" from element "body > main > div > div.normal.read > p > a:nth-child(1)" is "https://cobinhood.com/trade/DADI-BTC"

Scenario: There should be a link to Coin Falcon
  Then I expect that the attribute "href" from element "body > main > div > div.normal.read > p > a:nth-child(2)" is "https://coinfalcon.com/advanced-view/DADI-BTC"

Scenario: There should be a link to Gate.io
  Then I expect that the attribute "href" from element "body > main > div > div.normal.read > p > a:nth-child(3)" is "https://gate.io/trade/DADI_ETH"

Scenario: There should be a link to IDEX
  Then I expect that the attribute "href" from element "body > main > div > div.normal.read > p > a:nth-child(4)" is "https://idex.market/eth/dadi"

Scenario: There should be a link to EthBits
  Then I expect that the attribute "href" from element "body > main > div > div.normal.read > p > a:nth-child(5)" is "https://www.ethbits.com/"

Scenario: There should be a link to CoinMarketCap
  Then I expect that the attribute "href" from element "body > main > div > div.normal.read > p > a:nth-child(6)" is "https://coinmarketcap.com/currencies/dadi"

Scenario: There should be a link to CoinGecko
  Then I expect that the attribute "href" from element "body > main > div > div.normal.read > p > a:nth-child(7)" is "https://www.coingecko.com/en/price_charts/dadi/usd"
