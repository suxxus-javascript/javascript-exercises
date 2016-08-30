'use strict';

module.exports = function validParentheses(parens) {

  var rp = 0;
  var lp = 0;
  var i = parens.length;
  var p;

  if (parens.substr(i - 1) === '(') {
    return false;
  }

  while (--i >= 0) {

    p = parens.substr(i, 1);

    if (p === '(') {
      lp += 1;
    } else if (p === ')') {
      rp += 1;
    }

  }
  return rp === lp;
};
