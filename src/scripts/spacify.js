'use strict';
String.prototype.spacify = function() {
  return this.split('')
    .filter(function(e) {
      return e !== ' ';
    })
    .join(' ');
};
