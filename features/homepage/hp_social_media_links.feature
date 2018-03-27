Feature: Home Page - Social media links check

  As a user on the DADI.cloud home page they should be able to click the social media icon links in the header
  and be taken to the relevant website in a new window

Background:
  Given I open the url "http://beta2.dadi.cloud/en"

Scenario Outline: Check social media icon links open the correct page in a new window
  When I click on the link "<link>"
  # And I pause for 1500ms
  Then I expect the url "<url>" is opened in a new tab and has the title: "<title>"

  Examples:
  | link     | url                            | title                       |
  | Github   | https://github.com/dadi        | DADI · GitHub               |
  | Medium   | https://medium.com/dadi        | dadi – Medium               |
  | Twitter  | https://twitter.com/dadi       | DADI (@dadi) on Twitter     |
  | Reddit   | https://www.reddit.com/r/DADI/ | Decentralized web services  |
  | Telegram | https://t.me/dadichat          | Telegram: Contact @dadichat |
  # | Discord  | https://discordapp.com/invite/3sEvuYJ | Discord |
