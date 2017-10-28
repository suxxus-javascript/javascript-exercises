// https://www.codewars.com/kata/527176c487961e5900000106/train/javascript
// Build a function pipe to achieve this with JS. An example use could be:


Function.prototype.pipe = function () {
  const first = this;
  const args = [].slice.call(arguments);
  return function (val) {
    return args.reduce((acc, fn) => fn(acc), first(val));
  };
};
