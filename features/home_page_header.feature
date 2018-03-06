Feature: Home page header links check

  As a user on the DADI.cloud home page they should be able to click the links in the header and be taken to the
  relevant screen

@watch
Scenario Outline: Check header links go to the correct page
  Given a web browser is at the DADI.cloud home page
  When the user clicks on the header link "http://beta2.dadi.cloud/<url>"
  Then the relevant page is opened with the page title as "<title>"

  Examples:
  | url          | title                            |
  | en           | Open Source web services \| DADI |
  | en/roadmap   | Roadmap \| DADI |
  | en/network   | Network \| DADI |
  | en/knowledge | Knowledge \| DADI |
  | en/token     | Token \| DADI |
  | en/partners  | Partners \| DADI |
  | en/team      | The Team \| DADI |
