Feature: Home page header links check

  As a user on the DADI.cloud home page they should be able to click the links in the header and be taken to the
  relevant screen

Scenario Outline: Check header links go to the correct page
  # When the user clicks on the "<pagename>" header link /"<url>"
  Given I open the url "/"
  When I click on the link "<pagename>"
  When I pause for 1500ms
  Then I expect that the title is "<title>"

  Examples:
  | pagename  | url          | title                            |
  | Overview  | en           | Decentralized web services \| DADI |
  | Roadmap   | en/roadmap   | Roadmap \| DADI |
  | Network   | en/network   | Network \| DADI |
  | Knowledge | en/knowledge | Knowledge \| DADI |
  | Token     | en/token     | Token \| DADI |
  # | Partners  | en/partners  | Partners \| DADI |
  | Team      | en/team      | The Team \| DADI |
