module.exports = {
  // - - - - CUCUMBER - - - -
  path: './features',
  format: 'pretty',
  tags: '~@ignore',
  recommendedFilenameSeparator: '_',
  screenshotsOnError: true,
  screenshotsPath: '.screenshots/',
  captureAllStepScreenshots: false,
  saveScreenshotsToDisk: true,
  // Note: With a large viewport size and captureAllStepScreenshots enabled,
  // you may run out of memory. Use browser.setViewportSize to make the
  // viewport size smaller.
  saveScreenshotsToReport: true,
  jsonOutput: 'test/report/cucumber_report.json',

  // - - - - WEBDRIVER-IO  - - - -
  webdriverio: {
  //   desiredCapabilities: {
  //     chromeOptions: {
  //       args: ['headless', 'disable-gpu']
  //     },
  //     isHeadless: true
  //   },
    baseUrl: null,
    coloredLogs: true,
    screenshotPath: null,
    waitforTimeout: 500,
    waitforInterval: 250
  }
}
