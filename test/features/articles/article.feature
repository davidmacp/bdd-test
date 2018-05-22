Feature: Articles - Share buttons

  As a user on the DADI.network website they should be able to click a share link and be taken to the relevant
  social media channel

Scenario: Check Facebook Share link works
  Given I open the url "/updates/web-services/dadi-api-3-1"
  When I scroll to element "#stickContainer > div > div > p:nth-child(2)"
  And I click on the link "Share this article"
  Then I expect that element "#share > div" is visible
  Then I click on the link "Facebook"
  Then I expect a new tab has been opened

Scenario: Check Twitter Share link works
  Given I open the url "/updates/web-services/dadi-api-3-1"
  When I scroll to element "#stickContainer > div > div > p:nth-child(2)"
  And I click on the link "Share this article"
  Then I expect that element "#share > div" is visible
  Then I click on the link "Twitter"
  Then I expect a new tab has been opened

Scenario: Check Linkedin Share link works
  Given I open the url "/updates/web-services/dadi-api-3-1"
  When I scroll to element "#stickContainer > div > div > p:nth-child(2)"
  And I click on the link "Share this article"
  Then I expect that element "#share > div" is visible
  Then I click on the link "Linkedin"
  Then I expect a new tab has been opened

Scenario: Check Reddit Share link works
  Given I open the url "/updates/web-services/dadi-api-3-1"
  When I scroll to element "#stickContainer > div > div > p:nth-child(2)"
  And I click on the link "Share this article"
  Then I expect that element "#share > div" is visible
  Then I click on the link "Reddit"
  Then I expect a new tab has been opened
