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
  driver.manage().setTimeouts({implicit: 0.5 })

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

When('I fill QTD with {string}', async function (givenQtd) {
  let qtdInput = await driver.findElement(By.name('qtd'));
  await qtdInput.sendKeys(givenQtd);
});

When('I fill PRICE with {string}', async givenPrice => {
  let priceInput = await driver.findElement(By.name('price'));
  await priceInput.sendKeys(givenPrice);
})
When ('I fill PRODUCT with {string}', async givenProduct => {
  let productInput = await driver.findElement(By.name('product'));
  await productInput.sendKeys(givenProduct);
})
When ('I submit', async () => {
  let submitButton = await driver.findElement(By.name('submit-button'));
  await submitButton.click();
})
Then('the first result in the list should be {string}', async (expectedResult) => {
  let results = await driver.findElement(By.name('results-list')).getAttribute("value");
  console.log('Results', results)
  assert.strictEqual(results[0], expectedResult)
})

Then('the page title should be {string}', {timeout: 60 * 1000}, async function (expectedTitle) {
  const title = await driver.getTitle();
  assert.strictEqual(title, expectedTitle);
});

After(async function(){
  if (driver && typeof driver.quit === 'function') {
    await driver.quit();
  }
});
