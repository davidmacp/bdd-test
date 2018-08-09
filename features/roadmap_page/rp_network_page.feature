Feature: Roadmap - Network Page

  As a user on the DADI.cloud Roadmap Network page they are able to view and interact with the Network section

Background:
  Given I open the url "http://beta2.dadi.cloud/en/roadmap/network"

Scenario: The Network section is labelled correctly
  Then I expect that element "body > header > div > h1" contains the text "Network"
  And I expect that element "body > header > nav > div > ul > li:nth-child(4) > a" has the class "active"

Scenario: There is more than 1 article box displayed on the network page
  Then I expect that there is more than 1 article box visible on the network page
