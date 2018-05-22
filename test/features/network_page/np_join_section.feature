Feature: Network Page - Join Section

  As a user on the DADI.cloud Network page they should be able to register to 'Join'

Scenario: Scroll to 'Join'
  Given I open the url "/network"
  When I scroll to element "#join"

Scenario: Check Join section description
  Then I expect that element "#mc-embedded-subscribe-form > div > div.col.w-1-2.read.normal > p" contains the text "Like what you are reading? Want to earn tokens by becoming a DADI Node? Save money on cloud computing services? Build amazing digital product with DADI Web Services? Register with DADI now."

Scenario: Check there is a Registration Form
  Then I expect that element "#mce-FNAME" does exist
  And I expect that element "#mce-LNAME" is visible
  And I expect that element "#mce-EMAIL" is visible
  And I expect that element "#mc-embedded-subscribe-form > div > div:nth-child(2) > div:nth-child(2)" is visible
  And I expect that element "#mc-embedded-subscribe-form > div > div:nth-child(2) > div:nth-child(3)" is visible
  And I expect that button "#mc-embedded-subscribe" matches the text "Register now"
