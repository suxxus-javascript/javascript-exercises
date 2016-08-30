'use strict';

var test = require('tape');
var validParenthesess = require('scripts/valid-parenthesess');

test('validParenthesess', function(t) {

  var actual, expect;

  actual = validParenthesess('()');
  expect = true;
  t.equal(actual, expect);

  actual = validParenthesess('())(');
  expect = false;
  t.equal(actual, expect);

  actual = validParenthesess('(())((()())())');
  expect = true;
  t.equal(actual, expect);

  t.end();
});

test('---- end test ----', function(t) {
    t.end();
});
