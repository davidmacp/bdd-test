Feature: Home Page - Introduction section

  As a user on the DADI.cloud home page they are able to view the Introduction section

Scenario: The Introduction section is visible
  Given I open the url "/"
  # When I pause for 1000ms

Scenario: DADI logo visible
  Then I expect that element "body > header > div > h1" is visible

Scenario: Introduction is visible
  # Then I expect that element "body > header > div > h2" is visible
  And I expect that element "body > header > div > h2" matches the text "Fast, scalable, secure and inexpensive web services. This is the cloud, decentralized."
