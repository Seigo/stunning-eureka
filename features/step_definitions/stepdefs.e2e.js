const { Given, When, Then, AfterAll, BeforeAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const assert = require('assert');

// remote driver setup
const capabilities = Capabilities.firefox();
const firefoxUrl = "http://localhost:4444";
let driver;

Given('is selenium test', async () => {
    driver = new Builder()
        .usingServer(firefoxUrl)   
        .withCapabilities(capabilities)
        .build();
    try {
        console.log('Testing web driver');
        await driver.get('http://www.google.com');
    } catch(e) {
        console.log('Testing web driver error', e);
        await driver.quit();
    }
});

Given('I am on the QtoCusta home page', async function () {
    await driver.get('http://192.168.1.71:3000');
});

Then('the page title should be {string}', {timeout: 60 * 1000}, async function (expectedTitle) {
    const title = await driver.getTitle();
    console.log('title ', title);
    assert.strictEqual(title, expectedTitle);
});

AfterAll(async function(){
    if (driver && typeof driver.quit === 'function') {
        await driver.quit();
    }
});

