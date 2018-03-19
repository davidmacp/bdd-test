Feature: Roadmap page sub menu links check

  As a user on the DADI.cloud Roadmap page they should be able to view the links for the page's sub menu

Background:
  Given I open the url "http://beta2.dadi.cloud/en/roadmap"
  Then I expect that element "body > header > nav" does exist
  And I expect that element "body > header > nav > div > ul > li:nth-child(1) > a" has the class "active"

Scenario Outline: Check page sub menu links are visible
  Then I expect that element "<element>" does exist
  And I expect that element "<element>" contains the text "<text>"

  Examples:
  | element                                              | text          |
  | body > header > nav > div > ul > li:nth-child(1) > a | Everything    |
  | body > header > nav > div > ul > li:nth-child(2) > a | Announcements |
  | body > header > nav > div > ul > li:nth-child(3) > a | Web Services  |
  | body > header > nav > div > ul > li:nth-child(4) > a | Network       |
  | body > header > nav > div > ul > li:nth-child(5) > a | Cloud         |
  | body > header > nav > div > ul > li:nth-child(6) > a | Website       |
