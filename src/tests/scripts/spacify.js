'use strict';

var test = require('tape');
require('scripts/spacify');

// spacify function which takes a string as an argument, and returns
// the same string but with each character separated by a space

test('spacify', function(t) {

  var actual, expect;

  actual = 'mystring'.spacify();
  expect = 'm y s t r i n g';
  t.equal(actual, expect);

  actual = 'hello world'.spacify();
  expect = 'h e l l o w o r l d';
  t.equal(actual, expect);

  t.end();
});
