// Complete the following conditions in a anonymous function below
// The assertions on the right should all pass (they should all be green)
//
// The answers should be as follows:
// If the number is divisible by three, you should return "beard"
// If the number is divisible by five, you should return "mustache"
// If the number is divisible by tree and five, you should return "beard mustache"
// Otherwise you should return the number as a string.

'use strict';
module.exports = function(words, number) {
  return (function(value) {
    return value.length === 0 ? String(number) : value.join(' ');
  }(
    Object.keys(words).reduce(function(acc, value) {
      return ((number % value) === 0) ? acc.concat(words[value]) : acc;
    }, [])
  ));
};
