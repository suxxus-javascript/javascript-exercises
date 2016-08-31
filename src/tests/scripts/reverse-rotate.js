'use strict';

var test = require('tape');
var reverseRotate = require('scripts/reverse-rotate');

test('return chunks', function(t) {
  var actual, expect;

  actual = reverseRotate('1234', 0);
  expect = '';
  t.deepEqual(actual, expect);

  actual = reverseRotate('654', 4);
  expect = '';
  t.deepEqual(actual, expect);

  actual = reverseRotate('', 0);
  expect = '';
  t.deepEqual(actual, expect);

  actual = reverseRotate('123456987654', 6);
  expect = '234561876549';
  t.deepEqual(actual, expect);

  actual = reverseRotate('6644', 4);
  expect = '4466';
  t.deepEqual(actual, expect);

  actual = reverseRotate('3875', 4);
  expect = '8753';
  t.deepEqual(actual, expect);

  actual = reverseRotate('66443875', 4);
  expect = '44668753';
  t.deepEqual(actual, expect);

  t.end();
});

test('---- end test ----', function(t) {
  t.end();
});
