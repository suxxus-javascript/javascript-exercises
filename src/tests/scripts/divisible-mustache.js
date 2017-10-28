// Complete the following conditions in a anonymous function below
// The assertions on the right should all pass (they should all be green)
//
// The answers should be as follows:
// If the number is divisible by three, you should return "beard"
// If the number is divisible by five, you should return "mustache"
// If the number is divisible by three and five, you should return "beard mustache"
// Otherwise you should return the number as a string.


const words = {
  3: 'beard',
  5: 'mustache',
  7: 'eyebrows',
};

const test = require('tape');
const divisibleMustache = require('scripts/divisible-mustache');

test('is not divisible should return string', (t) => {
  let actual = divisibleMustache(words, 4),
    expect = '4';
  t.equal(actual, expect);
  t.end();
});

test('is divisible by three, should return beard', (t) => {
  let actual = divisibleMustache(words, 3),
    expect = 'beard';
  t.equal(actual, expect);
  t.end();
});

test('is divisible by five, should return mustache', (t) => {
  let actual = divisibleMustache(words, 5),
    expect = 'mustache';
  t.equal(actual, expect);
  t.end();
});

test('is divisible by seven, should return eyebrows', (t) => {
  let actual = divisibleMustache(words, 7),
    expect = 'eyebrows';
  t.equal(actual, expect);
  t.end();
});

test('is divisible by three and five, should return beard mustache', (t) => {
  let actual = divisibleMustache(words, 15),
    expect = 'beard mustache';
  t.equal(actual, expect);
  t.end();
});

test('is divisible by three and seven, should return beard eyebrows', (t) => {
  let actual = divisibleMustache(words, 21),
    expect = 'beard eyebrows';
  t.equal(actual, expect);
  t.end();
});

test('---- end test ----', (t) => {
  t.end();
});
