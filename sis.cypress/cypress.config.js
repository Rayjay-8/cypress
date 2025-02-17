import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },
  env: {},
  e2e: {
    setupNodeEvents(on, config) {
      import("cypress-mochawesome-reporter/plugin")(on);
    },
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false,
    baseUrl: "https://homo.dicomp.com.br/",
    viewportWidth: 1440,
    viewportHeight: 942,
  },
});
