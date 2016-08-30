'use strict';
module.exports = function(number) {

  var w = {
      '3': 'beard',
      '5': 'mustache',
      '7': 'eyebrows'
    },

    divisibles = Object.keys(w)
    .reduce(function(acc, value) {
      return ((number % value) === 0) ? acc.concat(w[value]) : acc;
    }, []);

  return divisibles.length === 0 ? String(number) : divisibles.join(' ');
};
