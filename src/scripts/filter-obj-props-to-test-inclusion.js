const _ = require('lodash');

const flatApiOrderList = (apiOrderList = {}) =>
  _.omit(
    Object.assign(
      {},
      apiOrderList,
      apiOrderList.address,
    ),
    'address',
  );

const dropNullOrEmpty = (obj = {}) => _.pickBy(obj, x => x);

const createRegexPatternToSearchValues = (obj = {}) =>
  new RegExp(_.values(obj).join('|'), 'gi');

const strIsIncluded = (str = '') =>
  (regex = {}) => regex.test(str);

const filterApiResp = (apiOrderList = [], currentFilter = '') =>
  apiOrderList.filter(_.flowRight([
    strIsIncluded(currentFilter),
    createRegexPatternToSearchValues,
    dropNullOrEmpty,
    flatApiOrderList,
  ]));

module.exports = {
  strIsIncluded,
  flatApiOrderList,
  createRegexPatternToSearchValues,
  dropNullOrEmpty,
  filterApiResp,
};

