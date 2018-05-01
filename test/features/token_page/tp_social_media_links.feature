Feature: Token Page - Social media links check

  As a user on the DADI.cloud Token page they should be able to view the links for the socal media channels
  in the header

Scenario: Check social media links are present
  # Given I have a screen that is 1310 by 768 pixels
  Given I open the url "/en/token"
  Then I expect that element "body > nav > div.cnt > ul > li.nav__social > a" does exist
  And there should be 6 Social Media icons visible
