Feature: Token Page - Exchange Partners check

  As a user on the DADI.cloud Token page they should be able to view a snapshot of all the current Exchange Partners

Background:
  Given I open the url "http://beta2.dadi.cloud/en/token"
  When I scroll to element "body > main > div > div:nth-child(1) > h3 > span"

Scenario: Check Exchange Partners title is correct
  Then I expect that element "body > main > div > div:nth-child(1) > h3 > span" matches the text "EXCHANGE PARTNERS"

Scenario: There are 4 Partners boxes visible
  Then there should be 4 Partner boxes visible

Scenario: The link to Okex should open in a new tab
  And I click on the element "body > main > div > div.grid > div:nth-child(1) > a"
  Then I expect the url "https://www.okex.com/" is opened in a new tab

Scenario: The link to KuCoin should open in a new tab
  And I click on the element "body > main > div > div.grid > div:nth-child(2) > a"
  Then I expect the url "https://www.kucoin.com/" is opened in a new tab

Scenario: The link to HitBTC should open in a new tab
  And I click on the element "body > main > div > div.grid > div:nth-child(3) > a"
  Then I expect the url "https://hitbtc.com/" is opened in a new tab

Scenario: The link to Bancor should open in a new tab
  And I click on the element "body > main > div > div.grid > div:nth-child(4) > a"
  Then I expect the url "https://www.bancor.network/discover" is opened in a new tab
