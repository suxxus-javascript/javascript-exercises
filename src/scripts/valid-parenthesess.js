

module.exports = function validParentheses(parens) {
  let rp = 0;
  let lp = 0;
  let i = parens.length;
  let p;

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
