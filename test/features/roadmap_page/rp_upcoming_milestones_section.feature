Feature: Roadmap Page - Upcoming Milestones section

  As a user on the DADI.cloud Roadmap page they are able to view and interact with the Upcoming Milestones section

Scenario: Scroll to 'Upcoming Milestones Section'
  Given I open the url "/en/roadmap"
  When I scroll to element "body > header > div > div.hdr > h3"

Scenario: The Upcoming Milestones section is labelled correctly
  Then I expect that header "body > header > div > div.hdr > h3" matches the text "UPCOMING MILESTONES"

Scenario: 4 Milestone boxes showing
  Then there should be 4 Upcoming Milestone boxes visible

Scenario: Each article has a primary badge
  Then there should be 4 primary badges visible

Scenario: Each article has a secondary badge
  Then there should be 4 secondary badges visible

Scenario: Each article has a title
  Then there should be 4 article titles visible

Scenario: Each article has a description
  Then 4 article descriptions are visible

Scenario: Each article has a milestone dates
  Then there should be 4 milestone dates

Scenario: Upcoming Milestones section has a 'View all milestones →' link
  Then there should be a "View all milestones →" link to click
