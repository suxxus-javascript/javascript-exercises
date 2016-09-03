'use strict';

var test = require('tape');
require('scripts/concatenating-functions');

test('has pipe method', function(t) {
  var foo = function() {};
  var actual = foo.pipe,
    expect = true;
  t.ok(actual, expect);
  t.end();
});

test('pipe should return a function', function(t) {
  var foo = function() {};

  var actual = typeof foo.pipe(),
    expect = 'function';
  t.equal(actual, expect);
  t.end();

});

test('should return 1', function(t) {
  //
  var addOne = function(val) {
    return val + 1;
  };

  var always = function(val) {
    return val;
  };

  var actual = always.pipe(addOne)(1),
    expect = 2;
  t.equal(actual, expect);
  t.end();

});

test('should return 4', function(t) {
  //
  var sqrt = function(val) {
    return val * val;
  };

  var addOne = function(val) {
    return val + 1;
  };

  var always = function(val) {
    return val;
  };

  var actual = always.pipe(addOne, sqrt)(1),
    expect = 4;
  t.equal(actual, expect);
  t.end();

});

test('should return [4, 16]', function(t) {
  //
  var sqrt = function(val) {
    return val * val;
  };

  var addOne = function(val) {
    return val + 1;
  };

  var always = function(val) {
    return val;
  };

  var actual = [1, 3].map(always.pipe(addOne, sqrt)),
    expect = [4, 16];
  t.deepEqual(actual, expect);
  t.end();

});

test('should return [64, 100]', function(t) {
  //
  var sqrt = function(val) {
    return val * val;
  };

  var addOne = function(val) {
    return val + 1;
  };

  var always = function(val) {
    return val;
  };

  var actual = [7, 9].map(always.pipe(addOne).pipe(sqrt)),
    expect = [64, 100];
  t.deepEqual(actual, expect);
  t.end();

});

test('---- end test ----', function(t) {
  t.end();
});
