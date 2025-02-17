import { defineConfig } from "cypress";
import plugins from "./cypress/plugins/index.js";

export default defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      return plugins(on)
    },
    env: {},
    testIsolation: false,
    baseUrl: "https://homo.dicomp.com.br/",
    viewportWidth: 1440,
    viewportHeight: 942,
  },
});
