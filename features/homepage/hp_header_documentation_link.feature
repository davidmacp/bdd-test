Feature: Home Page - documentation link

  As a user on the DADI.cloud home page they should be able to click the documentation link in the header and be taken
  to the DADI.tech website

Background:
  Given I open the url "http://beta2.dadi.cloud/en"

Scenario: Check documentation link works
  When I click on the link "Documentation"
  Then I expect the url "https://docs.dadi.tech" is opened in a new window
