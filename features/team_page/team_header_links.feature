Feature: Team Page - Header links check

  As a user on the DADI.cloud Team page they should be able to view the links for other screens in the header

Scenario Outline: Check header links are present
  Given I open the url "http://beta2.dadi.cloud/en/team"
  Then I expect that element "body > nav > div.cnt > ul > li:nth-child(6) > a" has the class "active"
  Then I expect that element "<element>" does exist
  And I expect that element "<element>" contains the text "<text>"

  Examples:
  | element                                         | text          |
  | body > nav > div.cnt > div > a                  | Home          |
  | body > nav > div.cnt > ul > li:nth-child(1) > a | Roadmap       |
  | body > nav > div.cnt > ul > li:nth-child(2) > a | Network       |
  | body > nav > div.cnt > ul > li:nth-child(3) > a | Web services  |
  | body > nav > div.cnt > ul > li:nth-child(4) > a | Knowledge     |
  | body > nav > div.cnt > ul > li:nth-child(5) > a | Token         |
  | body > nav > div.cnt > ul > li:nth-child(6) > a | Team          |
  | body > nav > div.cnt > ul > li:nth-child(7) > a | Documentation |
