Feature: Home page header links check

  As a user on the DADI.cloud home page they should be able to click the links in the header and be taken to the
  relevant screen

@watch
Scenario Outline: Check header links go to the correct page
  Given a web browser is at the DADI.cloud home page "<homepage>"
  When the user clicks on the "<pagename>" header link "<homepage>""<url>"
  Then the relevant page is opened with the page title as "<title>"

  Examples:
  | homepage                 | pagename  | url          | title                            |
  | http://beta2.dadi.cloud/ | Overview  | en           | Open Source web services \| DADI |
  | http://beta2.dadi.cloud/ | Roadmap   | en/roadmap   | Roadmap \| DADI |
  | http://beta2.dadi.cloud/ | Network   | en/network   | Network \| DADI |
  | http://beta2.dadi.cloud/ | Knowledge | en/knowledge | Knowledge \| DADI |
  | http://beta2.dadi.cloud/ | Token     | en/token     | Token \| DADI |
  | http://beta2.dadi.cloud/ | Partners  | en/partners  | Partners \| DADI |
  | http://beta2.dadi.cloud/ | Team      | en/team      | The Team \| DADI |
