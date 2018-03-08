var reporter = require('cucumber-html-reporter')

var options = {
  theme: 'bootstrap',
  jsonFile: 'test/report/cucumber_report.json',
  output: 'test/report/cucumber_report.html',
  screenshotsDirectory: '.screenshots/',
  screenshotsOnError: true,
  captureAllStepScreenshots: false,
  saveScreenshotsToDisk: true,
  // Note: With a large viewport size and captureAllStepScreenshots enabled,
  // you may run out of memory. Use browser.setViewportSize to make the
  // viewport size smaller.
  saveScreenshotsToReport: true,
  reportSuiteAsScenarios: true,
  launchReport: true,
  brandTitle: 'Acceptance Tests',
  metadata: {
    "App Version": "beta2",
    "Test Environment": "TEST",
    "Browser": "Chrome  64.0.3282.186",
    "Platform": "MAC OSX",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
}

reporter.generate(options)