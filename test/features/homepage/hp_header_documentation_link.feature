Feature: Home Page - Documentation link

  As a user on the DADI.cloud home page they should be able to click the documentation link in the header and be taken
  to the DADI.tech website

Scenario: Check documentation link works
  Given I open the url "/"
  When I click on the link "Documentation"
  And I pause for 1500ms
  Then I expect the url "https://docs.dadi.tech" is opened in a new window
