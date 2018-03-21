Feature: Roadmap - Website Page

  As a user on the DADI.cloud Roadmap Website page they are able to view and interact with the Website section

Background:
  Given I open the url "http://beta2.dadi.cloud/en/roadmap/website"

Scenario: The Website section is labelled correctly
  Then I expect that element "body > header > div > h1" contains the text "Website"
  And I expect that element "body > header > nav > div > ul > li:nth-child(6) > a" has the class "active"

Scenario: There is more than 1 article box displayed on the website page
  Then I expect that there is more than 1 article box visible on the website page
