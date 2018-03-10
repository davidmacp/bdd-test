module.exports = {
  // - - - - CUCUMBER - - - -
  path: './features',
  format: 'pretty',
  tags: '~@ignore',
  recommendedFilenameSeparator: '_',
  screenshotsOnError: false,
  screenshotsPath: '.screenshots/',
  captureAllStepScreenshots: false,
  saveScreenshotsToDisk: true,
  // Note: With a large viewport size and captureAllStepScreenshots enabled,
  // you may run out of memory. Use browser.setViewportSize to make the
  // viewport size smaller.
  saveScreenshotsToReport: true,
  jsonOutput: 'test/report/cucumber_report.json'
}