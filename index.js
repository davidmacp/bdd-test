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
    'App Version': 'http://beta2.dadi.cloud',
    'Test Environment': 'TEST',
    'Browser': 'Chrome  65.0.3325.181',
    'Platform': 'MAC OSX High Sierra v10.13.3',
    'Time': new Date(),
    'Executed': 'Remote'
  }
}

reporter.generate(options)
