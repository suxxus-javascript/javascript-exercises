// Complete the following conditions in a anonymous function below
// The assertions on the right should all pass (they should all be green)
//
// The answers should be as follows:
// If the number is divisible by three, you should return "beard"
// If the number is divisible by five, you should return "mustache"
// If the number is divisible by three and five, you should return "beard mustache"
// Otherwise you should return the number as a string.

'use strict';


var words = {
  '3': 'beard',
  '5': 'mustache',
  '7': 'eyebrows'
};

var test = require('tape');
var divisibleMustache = require('scripts/divisible-mustache');

test('is not divisible should return string', function(t) {
  var actual = divisibleMustache(words, 4),
    expect = '4';
  t.equal(actual, expect);
  t.end();
});

test('is divisible by three, should return beard', function(t) {
  var actual = divisibleMustache(words, 3),
    expect = 'beard';
  t.equal(actual, expect);
  t.end();
});

test('is divisible by five, should return mustache', function(t) {
  var actual = divisibleMustache(words, 5),
    expect = 'mustache';
  t.equal(actual, expect);
  t.end();
});

test('is divisible by seven, should return eyebrows', function(t) {
  var actual = divisibleMustache(words, 7),
    expect = 'eyebrows';
  t.equal(actual, expect);
  t.end();
});

test('is divisible by three and five, should return beard mustache', function(t) {
  var actual = divisibleMustache(words, 15),
    expect = 'beard mustache';
  t.equal(actual, expect);
  t.end();
});

test('is divisible by three and seven, should return beard eyebrows', function(t) {
  var actual = divisibleMustache(words, 21),
    expect = 'beard eyebrows';
  t.equal(actual, expect);
  t.end();
});

test('---- end test ----', function(t) {
  t.end();
});
