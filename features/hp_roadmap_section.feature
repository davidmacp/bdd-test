Feature: Roadmap section

  As a user on the DADI.cloud home page they are able to view and interact with the Roadmaps section

Background:
  Given a web browser is at the DADI.cloud home page

@ignore
Scenario: 6 articles showing
  When the user views the Roadmap Updates section
  Then there are 6 articles showing

Scenario:
