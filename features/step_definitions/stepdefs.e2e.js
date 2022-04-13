const { Given, When, Then, AfterAll, BeforeAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const assert = require('assert');

// remote driver setup
const capabilities = Capabilities.firefox();
const BROWSER_URL = "http://localhost:4444";
let driver;

Given('is selenium test', async () => {
  driver = new Builder()
    .usingServer(BROWSER_URL)   
    .withCapabilities(capabilities)
    .build();
  try {
    console.log('Sanity check web driver');
    await driver.get('http://www.google.com');
  } catch(e) {
    console.log('Sanity check web driver error', e);
    await driver.quit();
  }
});

Given('I am on the QtoCusta home page', async function () {
  try {
    await driver.get('http://192.168.1.72:3000');
  } catch (e) {
    console.log('given on qtocusta page: error', e)
  }
});

Then('the page title should be {string}', {timeout: 60 * 1000}, async function (expectedTitle) {
  const title = await driver.getTitle();
  assert.strictEqual(title, expectedTitle);
});

AfterAll(async function(){
  if (driver && typeof driver.quit === 'function') {
    await driver.quit();
  }
});
