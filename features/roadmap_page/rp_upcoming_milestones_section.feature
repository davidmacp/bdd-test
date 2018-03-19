Feature: Upcoming Milestones section

  As a user on the DADI.cloud Roadmap page they are able to view and interact with the Upcoming Milestones section
@watch
Scenario: The Upcoming Milestones section is labelled correctly
  Given I open the url "http://beta2.dadi.cloud/en/roadmap"
  When I scroll to element "body > header > div > div.hdr.fm.ttu.mb > h3"
  Then I expect that header "body > header > div > div.hdr.fm.ttu.mb > h3" matches the text "UPCOMING MILESTONES"
@watch
Scenario: 4 Milestone boxes showing
  Then there should be 4 Milestone boxes visible
  #Then there should be 4 Upcoming Milestone boxes visible

Scenario: Upcoming Milestones section has a 'View all milestones →' link
  Then there should be a "View all milestones →" link to click

# Scenario: Each box has a description text
#   Then there should be 11 box descriptions
#
# Scenario: Each box has an image icon displayed
#   Then there should be 11 image icons displayed
# @ignore
# Scenario: Each of the current core product boxes has a 'Learn more' link
#   Then there should be 5 "Learn more" links in the core products boxes
#
# Scenario: Each of the current core product boxes has a 'Latest updates' link
#   Then there should be 5 Latest updates links in the core products boxes
#
# Scenario: Each of the current core product boxes has a 'How to install' link
#   Then there should be 5 "How to install" links in the core products boxes
#
# Scenario: Each of the future core product boxes has a 'Coming soon' text
#   Then there should be 6 "Coming soon" text in the future core products boxes
