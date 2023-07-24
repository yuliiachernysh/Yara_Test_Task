const { defineConfig } = require("cypress");

module.exports = defineConfig({
  numTestsKeptInMemory: 15,
  defaultCommandTimeout: 15000,

  env: {
    apiUrl: "https://api.realworld.io/api",
    device: "web"
  },

  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      reportPageTitle: "My Test Suite",
      embeddedScreenshots: true,
      inlineAssets: true
    },
  video: false,

  retries: {
    runMode: 1,
    openMode: 0,
  },

  userAgent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
  viewportHeight: 768,
  viewportWidth: 1266,

  e2e: {
    setupNodeEvents: function (on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "http://angularjs.realworld.io/#",
  }
});
