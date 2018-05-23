Feature: Home Page - About section

  As a user on the DADI.cloud home page they are able to view the About section

Scenario: The About section is visible
  Given I open the url "/"
  When I scroll to element "#homeMain > div.bds"

Scenario: 3 boxes showing
  Then there should be 3 About boxes visible

Scenario: First box
  Then I expect that element "#homeMain > div.bds > div > div > div:nth-child(1) > img" is visible
  And I expect that element "#homeMain > div.bds > div > div > div:nth-child(1) > h2" matches the text "A fairer internet"
  And I expect that element "#homeMain > div.bds > div > div > div:nth-child(1) > p" contains the text "DADI is a peer-to-peer network owned by the people, shifting the balance of computational power away from large corporations"

Scenario: Second box
  Then I expect that element "#homeMain > div.bds > div > div > div:nth-child(2) > img" is visible
  And I expect that element "#homeMain > div.bds > div > div > div:nth-child(2) > h2" matches the text "Faster and cheaper"
  And I expect that element "#homeMain > div.bds > div > div > div:nth-child(2) > p" contains the text "The DADI network offers improved efficiency and performance, saving up to 90% compared with traditional cloud services"

Scenario: Third box
  Then I expect that element "#homeMain > div.bds > div > div > div:nth-child(3) > img" is visible
  And I expect that element "#homeMain > div.bds > div > div > div:nth-child(3) > h2" matches the text "Earn DADI tokens"
  And I expect that element "#homeMain > div.bds > div > div > div:nth-child(3) > p" contains the text "Anyone with a laptop, games console or any connected device can earn income by providing spare computation capacity for rent"

Scenario: There is a 'Trusted by' banner
  Then I expect that element "#homeMain > div:nth-child(3)" is visible
