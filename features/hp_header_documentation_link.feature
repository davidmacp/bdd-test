Feature: Home page documentation link

  As a user on the DADI.cloud home page they should be able to click the documentation link in the header and be taken
  to the DADI.tech website

@watch
Scenario: Check documentation link works
  Given a web browser is at the DADI.cloud home page
  When the user clicks on the documentation link
  Then the DADI.tech website is opened with the page title as "DADI Documentation"
