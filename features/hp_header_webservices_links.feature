Feature: Home page web services links

  As a user on the DADI.cloud home page they should be able to click on the web services header link
  and be shown a new sub menu with links to the 5 product web pages

@watch
Scenario: Check web services links appear
  Given a web browser is at the DADI.cloud home page
  When the user clicks on the web services header link
  Then the sub menu is displayed
  And the user should see a link for "web"
  And a link for "publish"
  And a link for "api"
  And a link for "cdn"
  And a link for "queue"
