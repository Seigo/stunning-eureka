const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { calculate } = require('../../src/core/qtoCusta');

// Result should be a simple multiplication

Given('product is {string}', function (givenProduct) {
    this.product = givenProduct;
});

Given('qtd is {string}', function (givenQtd) {
    this.qtd = givenQtd;
});

Given('price is {string}', function (givenPrice) {
  this.price = givenPrice;
});

When('I ask Qto Custa?', function () {
  this.actualAnswer = calculate(this.product, this.qtd, this.price);
});

Then('I really should be told {string}', function (expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer)
});


  