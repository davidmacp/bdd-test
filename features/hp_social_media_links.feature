Feature: Home page social media links check

  As a user on the DADI.cloud home page they should be able to click the social media icon links in the header
  and be taken to the relevant website in a new window

Scenario Outline: Check social media icon links open the correct page in a new window
  Given a web browser is at the DADI.cloud home page
  When the user clicks on the social media icon for "<icon>" in the header "<url>"
  Then the relevant social media page is opened in a new window with the page title as "<title>"

  Examples:
  | icon      | url                                   | title         |
  | github    | https://github.com/dadi               | DADI · GitHub |
  | medium    | https://medium.com/@daditech          | DADI – Medium |
  | twitter   | https://twitter.com/dadi              | DADI (@dadi) on Twitter |
  | reddit    | https://www.reddit.com/r/DADI/        | Decentralized web services |
  | discord   | https://discordapp.com/invite/3sEvuYJ | Discord |
  | telegram  | https://t.me/dadichat                 | Telegram: Contact @dadichat |
