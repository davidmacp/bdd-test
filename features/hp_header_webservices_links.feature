Feature: Home page web services links

  As a user on the DADI.cloud home page they should be able to click on the web services header link
  and be shown a new sub menu with links to the 5 product web pages

Scenario: Check web services links appear
  Given I am on the DADI.cloud homepage
  When the user clicks on the web services header link
  Then the sub menu is displayed
  And there should be a link for "web"
  And there should be a link for "publish"
  And there should be a link for "api"
  And there should be a link for "cdn"
  And there should be a link for "queue"
