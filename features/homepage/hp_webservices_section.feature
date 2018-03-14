Feature: Web Services section

  As a user on the DADI.cloud home page they are able to view and interact with the Web Services section

@watch
Scenario: The Web Services section is labelled correctly
  Given I open the url "http://beta2.dadi.cloud/en"
  When I scroll to element "#homeMain > div.cnt .hdr"
  Then I expect that header "#homeMain > div.cnt > .hdr:nth-of-type(1)" matches the text "WEB SERVICES"

@watch
Scenario: 11 Web Services boxes showing
  Then there should be 11 Web services boxes visible
