Feature: Roadmap - Cloud Page

  As a user on the DADI.cloud Roadmap Cloud page they are able to view and interact with the Cloud section

Scenario: The Cloud section is labelled correctly
  Given I open the url "http://beta2.dadi.cloud/en/roadmap/cloud"
  Then I expect that element "body > header > div > h1" contains the text "Cloud"
  And I expect that element "body > header > nav > div > ul > li:nth-child(5) > a" has the class "active"

Scenario: There is more than 1 article box displayed on the cloud page
  Then I expect that there is more than 1 article box visible on the cloud page
