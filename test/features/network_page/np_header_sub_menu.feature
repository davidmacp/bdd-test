Feature: Network Page - Sub menu links check

  As a user on the DADI.cloud Network page they should be able to view and interact with the sub menu links in
  the header

Background:
  Given I open the url "/network"

Scenario: Check architecture sub menu link works
  When I click on the link "Architecture"
  Then I expect that element "#architecture > h3 > span" is within the viewport

Scenario: Check use cases sub menu link works
  When I click on the link "Use cases"
  Then I expect that element "#usecases > h3 > span" is within the viewport

Scenario: Check contribute sub menu link works
  When I click on the link "Contribute"
  Then I expect that element "#contribute > h3 > span" is within the viewport
