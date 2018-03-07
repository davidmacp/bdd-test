var reporter = require('cucumber-html-reporter');

var options = {
  theme: 'bootstrap',
  jsonFile: 'test/report/cucumber_report.json',
  output: 'test/report/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "beta2",
    "Test Environment": "TEST",
    "Browser": "Chrome  64.0.3282.186",
    "Platform": "MAC OSX",
    "Parallel": "Scenarios",
    "Executed": "Remote"
  }
};

reporter.generate(options);