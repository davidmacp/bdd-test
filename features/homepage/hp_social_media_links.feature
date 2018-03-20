Feature: Home Page - social media links check

  As a user on the DADI.cloud home page they should be able to click the social media icon links in the header
  and be taken to the relevant website in a new window

Background:
  Given I open the url "http://beta2.dadi.cloud/en"

Scenario Outline: Check social media icon links open the correct page in a new window
  When I click on the link "<link>"
  And I pause for 1500ms
  Then I expect the url "<url>" is opened in a new window

  Examples:
  | link     | url         |
  | Github   | https://github.com/dadi |
  | Medium   | https://medium.com/@daditech |
  | Twitter  | https://twitter.com/dadi |
  | Reddit   | https://www.reddit.com/r/DADI/ |
  | Telegram | https://t.me/dadichat |
#  | Discord  | https://discordapp.com/invite/3sEvuYJ |
