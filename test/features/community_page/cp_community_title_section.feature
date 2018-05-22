Feature: Community Page - Title section

  As a user on the DADI.cloud Community page they are able to view the Community section

Scenario: Scroll to 'Community Title Section'
  Given I open the url "/community"
  When I scroll to element "body > header > div > h1"

Scenario: Check page header and description are visible
  Then I expect that element "body > header > div > h1" matches the text "Community"
  And I expect that element "body > header > div > p" matches the text "Everything you need to know to be a part of the DADI network – or to build amazing digital products with our web services"

Scenario: There are 3 Community boxes
  Then there should be 3 Community boxes displayed

# Scenario: Each box has a description title
#   Then there should be 3 box titles displayed
#
# Scenario: Each box has a description
#   Then there should be 3 box descriptions displayed
#
# Scenario: Each box has a link
#   Then there should be 3 box links displayed

# Scenario: There is a clickable box for Concepts
#   Then I expect that element "body > header > div > div > a:nth-child(1) > div.box__inner" does exist
#   And I expect that element "body > header > div > div > a:nth-child(1) > div.box__inner > h2" contains the text "Concepts"
#   And there should be an image icon for Concepts visible
#
# Scenario: There is a clickable box for FAQ
#   Then I expect that element "body > header > div > div > a:nth-child(2) > div.box__inner" does exist
#   And I expect that element "body > header > div > div > a:nth-child(2) > div.box__inner > h2" contains the text "FAQ"
#   And there should be an image icon for FAQ visible
#
# Scenario: There is a clickable box for Network
#   Then I expect that element "body > header > div > div > a:nth-child(3) > div.box__inner" does exist
#   And I expect that element "body > header > div > div > a:nth-child(3) > div.box__inner > h2" contains the text "Network"
#   And there should be an image icon for Network visible
#
# Scenario: There is a clickable box for Security
#   Then I expect that element "body > header > div > div > a:nth-child(4) > div.box__inner" does exist
#   And I expect that element "body > header > div > div > a:nth-child(4) > div.box__inner > h2" contains the text "Security"
#   And there should be an image icon for Security visible
#
# Scenario: There is a clickable box for Tutorials
#   Then I expect that element "body > header > div > div > a:nth-child(5) > div.box__inner" does exist
#   And I expect that element "body > header > div > div > a:nth-child(5) > div.box__inner > h2" contains the text "Tutorials"
#   And there should be an image icon for Tutorials visible