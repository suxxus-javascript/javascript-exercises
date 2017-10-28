

const test = require('tape');
require('scripts/concatenating-functions');

test('has pipe method', (t) => {
  const foo = function () {};
  let actual = foo.pipe,
    expect = true;
  t.ok(actual, expect);
  t.end();
});

test('pipe should return a function', (t) => {
  const foo = function () {};

  let actual = typeof foo.pipe(),
    expect = 'function';
  t.equal(actual, expect);
  t.end();
});

test('should return 1', (t) => {
  //
  const addOne = function (val) {
    return val + 1;
  };

  const always = function (val) {
    return val;
  };

  let actual = always.pipe(addOne)(1),
    expect = 2;
  t.equal(actual, expect);
  t.end();
});

test('should return 4', (t) => {
  //
  const sqrt = function (val) {
    return val * val;
  };

  const addOne = function (val) {
    return val + 1;
  };

  const always = function (val) {
    return val;
  };

  let actual = always.pipe(addOne, sqrt)(1),
    expect = 4;
  t.equal(actual, expect);
  t.end();
});

test('should return [4, 16]', (t) => {
  //
  const sqrt = function (val) {
    return val * val;
  };

  const addOne = function (val) {
    return val + 1;
  };

  const always = function (val) {
    return val;
  };

  let actual = [1, 3].map(always.pipe(addOne, sqrt)),
    expect = [4, 16];
  t.deepEqual(actual, expect);
  t.end();
});

test('should return [64, 100]', (t) => {
  //
  const sqrt = function (val) {
    return val * val;
  };

  const addOne = function (val) {
    return val + 1;
  };

  const always = function (val) {
    return val;
  };

  let actual = [7, 9].map(always.pipe(addOne).pipe(sqrt)),
    expect = [64, 100];
  t.deepEqual(actual, expect);
  t.end();
});

test('---- end test ----', (t) => {
  t.end();
});
