const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // reporter: 'cypress-mochawesome-reporter',
  // reporterOptions: {
  //   reportDir: 'cypress/reports',
  //   overwrite: false,
  //   html: false,
  //   json: true
  // },
  // video: true,
  // videosFolder: 'cypress/videos',
  // screenshotsFolder: 'cypress/screenshots',
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true
    },
    video: true,
  },
});
