'use strict';

module.exports = function(values) {
  return values.reduce(function(acc, value) {
    return value === 0 ? acc.concat(0) : acc.concat(acc.splice(acc.indexOf(0), 0, value));
  }, []);
};
