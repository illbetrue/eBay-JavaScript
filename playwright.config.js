// @ts-check
// eslint-disable-next-line no-undef
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
// eslint-disable-next-line no-undef
export default defineConfig({
  testDir: './src/tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  // eslint-disable-next-line no-undef
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // eslint-disable-next-line no-undef
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  // eslint-disable-next-line no-undef
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // @ts-ignore
  reporter: [['list'],['allure-playwright',{outputFolder: 'results'}]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://www.ebay.com/',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
    name: 'Chrome',
    use: { ...devices['Desktop Chrome'] },
    },

    //{
      //name: 'firefox',
      //use: { ...devices['Desktop Firefox'] },
    //},

    //{
      //name: 'Safari',
      //use: { ...devices['Desktop Safari'] },
    //},

    /* Test against mobile viewports. */
    {
    name: 'MobileChrome',
    use: { ...devices["Pixel 7"] },
    },
    {
    name: 'MobileSafari',
    use: { ...devices["iPhone 13 Pro Max"] },
    },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

