Feature: Token Page - Description check

  As a user on the DADI.cloud Token page they should be able to view the page title and description

Scenario: Check page header and description are visible
  Given I open the url "/token"
  Then I expect that element "body > header > div.cnt > h1" contains the text "Token"
  And I expect that element "body > header > div.cnt > p" matches the text "DADI uses its own ERC20 token (DADI), an integral part of the DADI Cloud network. Consumers will be charged tokens for their usage of DADI Cloud services, contributors can earn them by offering up computing power."
