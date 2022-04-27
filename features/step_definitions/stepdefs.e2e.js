const { Given, When, Then, AfterAll, BeforeAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const assert = require('assert');

// remote driver setup
const capabilities = Capabilities.firefox();
const BROWSER_URL = "http://localhost:4444";
let driver;

Given('is selenium test', async function () {
  driver = new Builder()
    .usingServer(BROWSER_URL)   
    .withCapabilities(capabilities)
    .build();
  driver.manage().setTimeouts({implicit: 0.5 })

  try {
    console.log('Sanity check web driver');
    await driver.get('http://www.google.com');
  } catch(e) {
    console.log('Sanity check web driver error', e);
    await driver.quit();
  }
});

Given('QCEC is open', async function () {
  try {
    console.log('QCEC is trying to open');
    await driver.get('http://192.168.1.70:3000/');
  } catch(e) {
    console.log('QCEC is not open', e);
    await driver.quit();
  }
})

AfterAll(async function(){
  if (driver && typeof driver.quit === 'function') {
    await driver.quit();
  }
});
