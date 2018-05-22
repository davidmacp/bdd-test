Feature: Network Page - Network Updates section

  As a user on the DADI.cloud Network page they are able to view and interact with the Network Updates section

Scenario: Scroll to 'Network Updates Section'
  Given I open the url "/network"
  When I scroll to element "body > main > div:nth-child(3) > div.hdr.fm.ttu.mb.mt > h3 > span"

Scenario: Network Updates section labelled - Network Page
  Then I expect that header "body > main > div:nth-child(3) > div.hdr.fm.ttu.mb.mt > h3 > span" matches the text "NETWORK UPDATES"

Scenario: There is at least 1 article box displayed
  Then I expect that there is at least 1 article box visible in the network updates section

Scenario: Network Updates section has an 'All updates' link
  Then there should be an "All updates" link at the foot of Network Updates section
