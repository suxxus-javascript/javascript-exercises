

const test = require('tape');
const combine = require('scripts/combine');

test('combine1', (t) => {
  let actual = combine(['a', 'b', 'c', 'd'], [1, 2, 3]),
    expect = ['a', 1, 'b', 2, 'c', 3, 'd'];
  t.deepEqual(actual, expect);
  t.end();
});

test('combine2', (t) => {
  let actual = combine(['a', 'b', 'c', 'd'], [1, 2, 3, 4, 5, 6]),
    expect = ['a', 1, 'b', 2, 'c', 3, 'd', 4, 5, 6];
  t.deepEqual(actual, expect);
  t.end();
});

test('combine3', (t) => {
  let actual = combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]),
    expect = ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5];
  t.deepEqual(actual, expect);
  t.end();
});

test('---- end test ----', (t) => {
  t.end();
});
