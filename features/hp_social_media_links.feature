Feature: Home page social media links check

  As a user on the DADI.cloud home page they should be able to click the social media icon links in the header
  and be taken to the relevant website in a new window

@watch
Scenario Outline: Check social media icon links open the correct page in a new window
  Given a web browser is at the DADI.cloud home page "<homepage>"
  When the user clicks on the social media icon for "<icon>" in the header "<url>"
  Then the relevant social media page is opened in a new window with the page title as "<title>"

  Examples:
  | homepage                 | icon      | url                                   | title         |
  | http://beta2.dadi.cloud/ | github    | https://github.com/dadi               | DADI · GitHub |
  | http://beta2.dadi.cloud/ | medium    | https://medium.com/@daditech          | DADI – Medium |
  | http://beta2.dadi.cloud/ | twitter   | https://twitter.com/dadi              | DADI (@dadi) on Twitter |
  | http://beta2.dadi.cloud/ | reddit    | https://www.reddit.com/r/DADI/        | Decentralized web services |
  | http://beta2.dadi.cloud/ | discord   | https://discordapp.com/invite/3sEvuYJ | Discord |
  | http://beta2.dadi.cloud/ | telegram  | https://t.me/dadichat                 | Telegram: Contact @dadichat |
