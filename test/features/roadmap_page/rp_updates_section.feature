Feature: Roadmap Page - Updates section

  As a user on the DADI.cloud Roadmap page they are able to view and interact with the Updates section

Scenario: Scroll to 'Updates Section'
  Given I open the url "/en/roadmap"
  When I scroll to element "body > main > div > div.hdr > h3 > span"

Scenario: Updates section labelled - Roadmap Page
  Then I expect that header "body > main > div > div.hdr > h3 > span" matches the text "ROADMAP UPDATES"

Scenario: 6 articles showing - Roadmap Page
  Then there should be 6 update articles visible

Scenario: Each article has a badge - Roadmap Page
  Then there should be 6 article badges visible

Scenario: Each primary badge should be a link to the Roadmap page - Roadmap Page
  Then there should be 6 clickable primary badges to the Roadmap page

Scenario: Each article has a secondary badge - Roadmap Page
  Then there should be 6 secondary badges visible

Scenario: Each article has a clickable title and description below it - Roadmap Page
  Then there should be 6 clickable article titles visible
  And 6 article descriptions visible

Scenario: Each article has a footer that contains a date, a team member name and an image - Roadmap Page
  Then there should be 6 valid dates visible
  And there should be 6 team member names visible
  And there should be 6 team member images visible

Scenario: Roadmap section has a 'Next →' link - Roadmap Page
  Then there should be a "Next →" link visible
