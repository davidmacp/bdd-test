Feature: Roadmap Announcements Page

  As a user on the DADI.cloud Roadmap Announcements page they are able to view and interact with the Announcements section

Scenario: The Announcements section is labelled correctly
  Given I open the url "http://beta2.dadi.cloud/en/roadmap/announcements"
  Then I expect that element "body > header > div > h1" contains the text "Announcements"
  And I expect that element "body > header > nav > div > ul > li:nth-child(2) > a" has the class "active"
