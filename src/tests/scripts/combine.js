'use strict';

var test = require('tape');
var combine = require('scripts/combine');

test('combine1', function(t) {
  var actual = combine(['a', 'b', 'c', 'd'], [1, 2, 3]),
    expect = ['a', 1, 'b', 2, 'c', 3, 'd'];
  t.deepEqual(actual, expect);
  t.end();
});

test('combine2', function(t) {
  var actual = combine(['a', 'b', 'c', 'd'], [1, 2, 3, 4, 5, 6]),
    expect = ['a', 1, 'b', 2, 'c', 3, 'd', 4, 5, 6];
  t.deepEqual(actual, expect);
  t.end();
});

test('combine3', function(t) {
  var actual = combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]),
    expect = ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5];
  t.deepEqual(actual, expect);
  t.end();
});

test('---- end test ----', function(t) {
  t.end();
});
