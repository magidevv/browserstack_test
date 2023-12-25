import { config as dotenvConfig } from "dotenv";
dotenvConfig();

export const config = {
  services: ["browserstack"],

  user: process.env.BROWSERSTACK_USERNAME || "BROWSERSTACK_USERNAME",
  key: process.env.BROWSERSTACK_ACCESS_KEY || "BROWSERSTACK_ACCESS_KEY",

  updateJob: false,
  specs: ["./e2e/specs/**.specs.js"],
  exclude: [],

  capabilities: [
    {
      project: "First Webdriverio Android Project",
      build: "Webdriverio Google Pixel",
      name: "google_pixel_test",
      device: "Google Pixel 7 Pro",
      os_version: "13.0",
      app: process.env.BROWSERSTACK_APP_ID || "bs://<hashed app-id>",
      "browserstack.debug": true,
    },
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 20000,
  },
};
