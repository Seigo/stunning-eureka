const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { isItFriday } = require('../../src/core/fridayService');

Given('today is Sunday', function () {
  this.today = 'Sunday';
});

When('I ask whether it\'s Friday yet', function () {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});