// https://www.codewars.com/kata/527176c487961e5900000106/train/javascript
// Build a function pipe to achieve this with JS. An example use could be:

'use strict';
Function.prototype.pipe = function() {
  var first = this;
  var args = [].slice.call(arguments);
  return function(val) {
    return args.reduce(function(acc, fn) {
      return fn(acc);
    }, first(val));
  };
};
