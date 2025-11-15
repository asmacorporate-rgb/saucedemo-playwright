// @ts-check

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: false,         // run in visible browser
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    baseURL: "https://www.saucedemo.com",
    slowMo: 10000              // slows down actions by 500ms
  }
});
