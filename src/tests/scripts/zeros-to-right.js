'use strict';

var test = require('tape');
var zerosToRight = require('scripts/zeros-to-right');

test('zerosToRight', function(t) {

  var actual, expect;

  actual = zerosToRight([0, 2, false, null, 0, 2, 6, 0, 'i']);
  expect = [2, false, null, 2, 6, 'i', 0, 0, 0];
  t.deepEqual(actual, expect);

  t.end();
});

test('---- end test ----', function(t) {
    t.end();
});
