const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://homo.dicomp.com.br/solar.piersystem.com.br",
    env: {
      HOST_BACK: "https://homo.dicomp.com.br/solar.piersystem.com.br/back"
    }
  },
  viewportWidth: 1440,
  viewportHeight: 942,
});
