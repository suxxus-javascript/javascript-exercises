'use strict';

module.exports = function() {

  var args = [].slice.call(arguments);

  var len = args.reduce(function(acc, val) {
    return Math.max(acc, val.length);
  }, 0);

  var arr = new Array(len);
  var acc = [];

  arr.fill(true).forEach(function(item, idx) {
    args.forEach(function(val) {
      if (val[idx]) {
        acc.push(val[idx]);
      }
    });
  });
  return acc;
};
