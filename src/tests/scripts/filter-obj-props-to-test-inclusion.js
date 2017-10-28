const test = require('tape');
const {
  dropNullOrEmpty,
  flatApiOrderList,
  createRegexPatternToSearchValues,
  filterApiResp, strIsIncluded,
} = require('scripts/filter-obj-props-to-test-inclusion');

const props = Object.freeze({
  view: {
    currentFilter: 'the order is xAx225 and the customer name is Tito',
  },
  apiOrderList: [
    {
      orderId: 'xAx225',
      status: 'xxx',
      customerName: 'Cornelious',
      address: {
        street: 'strasbase',
        city: 'Hamburg',
        zipCode: '28009',
      },
    }, {
      orderId: 'xb55Sss',
      status: 'xxx',
      customerName: 'Tito',
      address: {
        street: 'strasbase',
        city: 'Hamburg',
        zipCode: '28009',
      },
    }, {
      orderId: 'xb55Sss',
      status: 'xxx',
      customerName: '',
      address: {
        street: '',
        city: '',
        zipCode: null,
      },
    },
  ],
});

test('flatApiOrderList', (t) => {
  const actual = flatApiOrderList({ a: 'a', address: { street: 'c' } });
  const expect = { a: 'a', street: 'c' };
  t.deepEqual(actual, expect, 'flatted');
  t.end();
});


test('strIsIncluded', (t) => {
  const str = 'the name is John Martin';
  const pattern = /john/gi;

  const actual = strIsIncluded(str)(pattern);
  const expect = true;
  t.equal(actual, expect, 'John is included');
  t.end();
});

test('dropNullOrEmpty', (t) => {
  const actual = dropNullOrEmpty(props.apiOrderList[2]).street;
  const expect = undefined;
  t.equal(actual, expect, 'street prop is undefined');
  t.end();
});

test('createRegexPatternToSearchValues', (t) => {
  const actual = createRegexPatternToSearchValues({ a: 'a', b: 'b' }).toString();
  const expect = '/a|b/gi';
  t.equal(actual, expect, 'the pattern to test');
  t.end();
});

test('filterApiResp', (t) => {
  const result = filterApiResp(
    props.apiOrderList,
    props.view.currentFilter,
  );
  const actual = result[1].customerName;
  const expect = props.apiOrderList[1].customerName;
  t.equal(actual, expect, 'was fitered by the name');
  t.end();
});

test('---- end test ----', (t) => {
  t.end();
});
