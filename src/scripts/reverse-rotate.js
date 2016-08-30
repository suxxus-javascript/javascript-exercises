'use strict';
// http://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript

module.exports = function(str, sz) {

  var doRevRot = function(elms, chunkNums, chunks) {

    if (chunkNums <= 0) {
      return chunks;
    }

    var chunk = elms.splice(0, sz),

      sumCubes = chunk.reduce(function(acc, val) {
        return acc + Math.pow(val, 3);
      }, 0),

      isDivisibleByTwo = sumCubes % 2 === 0,

      reverse = function(s) {
        return s.reverse();
      },

      rotate = function(s) {
        return s.concat(s.shift());
      },

      action = isDivisibleByTwo ? reverse : rotate;

    chunks.push(action(chunk.slice(0)).join(''))
    return doRevRot(elms, --chunkNums, chunks);
  };

  var nunberOfChunks = Math.floor(str.length / sz);
  return doRevRot(str.split(''),
    nunberOfChunks === Infinity || isNaN(nunberOfChunks) ? 0 : nunberOfChunks, []).join('');
};