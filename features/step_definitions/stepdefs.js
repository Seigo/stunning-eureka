const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { isItFriday } = require('../../src/core/fridayService');
const { calculate } = require('../../src/core/qtoCusta');

Given('today is {string}', function (givenDay) {
  this.today = givenDay;
});

When('I ask whether it\'s Friday yet', function () {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});






Given('qtd is {string}', function (givenQtd) {
  this.qtd = givenQtd;
});

Given('price is {string}', function (givenPrice) {
  this.price = givenPrice;
});

When('I ask Qto Custa?', function () {
  this.actualAnswer = calculate(this.qtd, this.price);
});

Then('I really should be told {float}', function (expectedAnswer) {

  assert.strictEqual(this.actualAnswer, expectedAnswer)
});

