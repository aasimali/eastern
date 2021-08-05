exports.config = {

  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    // tags: '@TC1',
    require: [
      'stepDefinitions/*.js'
    ],
    format: 'json:htmlReport/results.json',
  },

  specs: [
    'features/*.feature'
  ],

  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options: {
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true
    }
  }],

  onPrepare: function () {
    browser.driver.manage().window().maximize();
  }

}