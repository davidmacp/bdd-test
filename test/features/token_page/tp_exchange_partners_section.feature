Feature: Token Page - Exchange Partners check

  As a user on the DADI.cloud Token page they should be able to view a snapshot of all the current Exchange Partners

Background:
  Given I open the url "/en/token"
  When I scroll to element "body > main > div > div:nth-child(1) > h3 > span"

Scenario: Check Exchange Partners title is correct
  Then I expect that element "body > main > div > div:nth-child(1) > h3 > span" matches the text "EXCHANGE PARTNERS"

Scenario: There are 4 Partners boxes visible
  Then there should be 4 Partner boxes visible

Scenario: There should be a link to Okex
  Then I expect that the attribute "href" from element "body > main > div > div.grid > div:nth-child(1) > a " is "https://okex.com/"

Scenario: There should be a link to KuCoin
  Then I expect that the attribute "href" from element "body > main > div > div.grid > div:nth-child(2) > a " is "https://kucoin.com/"

Scenario: There should be a link to HitBTC
  Then I expect that the attribute "href" from element "body > main > div > div.grid > div:nth-child(3) > a " is "https://hitbtc.com/"

Scenario: There should be a link to Bancor
  Then I expect that the attribute "href" from element "body > main > div > div.grid > div:nth-child(4) > a " is "https://www.bancor.network/"
