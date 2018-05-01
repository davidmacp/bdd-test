const defaultTimeoutInterval = process.env.DEBUG ? (60 * 60 * 500) : 30000

exports.config = {

  specs: [
    './test/features/**/*.feature'
    // './test/features/**/team_social_media_links.feature'
  ],
  // Define specific suites
  suites: {
    homepage: [
      './test/features/homepage/hp_header_documentation_link.feature',
      './test/features/homepage/hp_header_links.feature',
      './test/features/homepage/hp_header_webservices_links.feature',
      './test/features/homepage/hp_knowledge_categories_section.feature',
      './test/features/homepage/hp_latest_knowledge_section.feature',
      './test/features/homepage/hp_roadmap_section.feature',
      './test/features/homepage/hp_social_media_links.feature',
      './test/features/homepage/hp_testnet_section.feature',
      './test/features/homepage/hp_webservices_section.feature'
    ],
    knowledge_page: [
      './test/features/knowledge_page/kp_header_links.feature',
      './test/features/knowledge_page/kp_social_media_links.feature',
      './test/features/knowledge_page/kp_knowledge_categories_section.feature',
      './test/features/knowledge_page/kp_latest_articles_section.feature'
    ],
    network_page: [
      './test/features/network_page/np_contribute_section.feature',
      './test/features/network_page/np_description_section.feature',
      './test/features/network_page/np_header_links.feature',
      './test/features/network_page/np_header_sub_menu.feature',
      './test/features/network_page/np_platform_arch_section.feature',
      './test/features/network_page/np_roadmap_updates_section.feature',
      './test/features/network_page/np_social_media_links.feature',
      './test/features/network_page/np_testnet_status.feature',
      './test/features/network_page/np_use_case_section.feature'
    ],
    roadmap_page: [
      // ...
    ],
    team_page: [
      './test/features/team_page/team_advisors_section.feature',
      './test/features/team_page/team_core_team_section.feature',
      './test/features/team_page/team_description_section.feature',
      './test/features/team_page/team_header_links.feature',
      './test/features/team_page/team_social_media_links.feature'
    ],
    token_page: [
      './test/features/token_page/tp_description_section.feature',
      './test/features/token_page/tp_exchange_partners_section.feature',
      './test/features/token_page/tp_find_us_on_section.feature',
      './test/features/token_page/tp_header_links.feature',
      './test/features/token_page/tp_social_media_links.feature',
      './test/features/token_page/tp_token_stats_section.feature'
    ]
  },
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 5,

  capabilities: [

    {
      browserName: 'chrome',
      // platform: 'Windows 10',
      // version: '50.0',
      maxInstances: '5',
      chromeOptions: {
        args: ['--headless', '--disable-gpu', 'window-size=1920,1080']
      }
    }
    //
    // {
    //     browserName: 'firefox',
    //     // platform: 'Windows 10',
    //     // version: '50.0',
    //     maxInstances: '5',
    // },

    // {
    //     browserName: 'safari',
    //     // platform: 'Windows 10',
    //     // version: '50.0',
    //     maxInstances: '5',
    // },
    //
    // {
    //     browserName: 'internet explorer',
    //     platform: '',
    //     version: '',
    //     acceptUntrustedCertificates: true,
    //     ignoreProtectedModeSettings: true,    //only applicable to IE browser
    //     ignoreZoomSetting: true,              //only applicable to IE browser
    //     ensureCleanSession: true,
    //     maxInstances: '5',
    //     // specs: [
    //     //     './test/specs/*.js'
    //     // ],
    // },

    // {
    //     browserName: 'phantomjs',
    //     platform: '',
    //     version: '',
    //     maxInstances: '5',
    //
    //     //  specs: [
    //     //    './test/specs/*.js'
    //     //  ],
    // },
    //
    // {
    //     browserName: 'chrome',
    //     chromeOptions: {
    //       // run in headless mode
    //       args: ['--headless'],
    //       //binary:   '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary'
    //       binary:   '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'  //for OS X
    //       //binary:   '/Program Files (x86)/Google/Chrome/Application/chrome.exe'     //for windows7
    //     },
    //     platform: '',
    //     version: '',
    //     maxInstances: '5',
    //     // specs: [
    //     //     './test/specs/*.js'
    //     // ],
    // },
    //
    // {
    //     browserName: 'firefox',
    //     // platform: 'Windows 10',
    //     // version: '50.0',
    //     maxInstances: '5',
    //     // flag to activate Firefox headless mode (see https://github.com/mozilla/geckodriver/blob/master/README.md#firefox-capabilities for more details about moz:firefoxOptions)
    //     "moz:firefoxOptions": { args: ['-headless'] }
    // },
  ],
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // By default WebdriverIO commands are executed in a synchronous way using
  // the wdio-sync package. If you still want to run your tests in an async way
  // e.g. using promises you can set the sync option to false.
  sync: true,
  logLevel: 'error', // Level of logging verbosity: silent | verbose | command | data | result | error
  coloredLogs: true, // Enables colors for log output.
  screenshotPath: './test/reports/errorShots/', // Saves a screenshot to a given path if a command fails.
  // take screenshot on reject
  screenshotOnReject: false,
  //
  // Set a base URL in order to shorten url command calls. If your url parameter starts
  // with "/", then the base url gets prepended.
  // baseUrl: 'http://localhost:3000',
  baseUrl: 'http://beta2.dadi.cloud/en',
  waitforTimeout: 30000, // Default timeout for all waitFor* commands.
  connectionRetryTimeout: 30000, // Default timeout in milliseconds for request  if Selenium Grid doesn't send response
  connectionRetryCount: 3, // Default request retries count

  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  //
  services: ['selenium-standalone'],
  // services: ['selenium-standalone', 'phantomjs', 'appium'],
  //
  framework: 'cucumber',
  // reporters: ['spec', 'allure', 'json'],
  reporters: ['spec', 'allure'],

  reporterOptions: {
    // json: {outputDir: './test/reports/json-results/'},
    allure: {
      outputDir: './test/reports/allure-results/',
      disableWebdriverStepsReporting: false,
      useCucumberStepReporter: true
    }
  },

  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    require: ['./test/stepDefinitions/**/*.js', './test/stepDefinitions/given.js', './test/stepDefinitions/when.js', './test/stepDefinitions/then.js'], // <string[]> (file/dir) require files before executing features
    backtrace: true, // <boolean> show full backtrace for errors
    // compiler: ['js:babel-core/register'], // <string[]> filetype:compiler used for processing required features
    failAmbiguousDefinitions: true, // <boolean< Treat ambiguous definitions as errors
    dryRun: false, // <boolean> invoke formatters without executing steps
    failFast: false, // <boolean> abort the run on first failure
    ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings
    name: [], // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    snippets: true, // <boolean> hide step definition snippets for pending steps
    format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    colors: true, // <boolean> disable colors in formatter output
    source: false, // <boolean> hide source uris
    profile: [], // <string[]> (name) specify the profile to use
    strict: true, // <boolean> fail if there are any undefined or pending steps
    tagExpression: 'not @Pending', // <string> (expression) only execute the features or scenarios with tags matching the expression, see https://docs.cucumber.io/tag-expressions/
    timeout: defaultTimeoutInterval, // <number> timeout for step definitions
    tagsInTitle: false, // <boolean> add cucumber tags to feature or scenario name
    snippetSyntax: undefined // <string> specify a custom snippet syntax
  },

  //
  // =====
  // Hooks
  // =====
  // WedriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  //
  // Gets executed before test execution begins. At this point you can access all global
  // variables, such as `browser`. It is the perfect place to define custom commands.
  before: function () {
    /**
       * Setup the Chai assertion framework
       */
    const chai = require('chai')
    global.expect = chai.expect
    global.assert = chai.assert
    global.should = chai.should()
  }
  //
  // after: function (capabilities, specs) {
  //   //do your stuff
  // },
  //
  // beforeStep: function (stepResult) {
  //     //do your stuff
  // },
  //
  // afterStep: function (stepResult) {
  //     //do your stuff
  // },
  //
  //
  // beforeFeature: function (feature) {
  //     //do your stuff
  // },
  //
  // afterFeature: function (feature) {
  //     //do your stuff
  // },
  //
  // beforeScenario: function (scenario) {
  //     //do your stuff
  // },
  // afterScenario: function (scenarioResult) {
  //     //do your stuff
  // },
}
