Feature: Roadmap - Web Services Page

  As a user on the DADI.cloud Roadmap Web Services page they are able to view and interact with the Web Services section

Background:
  Given I open the url "http://beta2.dadi.cloud/en/roadmap/web-services"

Scenario: The Web Services section is labelled correctly
  Then I expect that element "body > header > div > h1" contains the text "Web Services"
  And I expect that element "body > header > nav > div > ul > li:nth-child(3) > a" has the class "active"

Scenario: There is more than 1 article box displayed on the web services page
  Then I expect that there is more than 1 article box visible on the web services page
