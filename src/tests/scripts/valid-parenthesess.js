

const test = require('tape');
const validParenthesess = require('scripts/valid-parenthesess');

test('validParenthesess', (t) => {
  let actual,
    expect;

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

test('---- end test ----', (t) => {
  t.end();
});
