
// http://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript

module.exports = function (str, sz) {
  var doRevRot = function (elms, chunkNums, chunks) {
    if (chunkNums <= 0) {
      return chunks;
    }

    let chunk = elms.splice(0, sz),

      sumCubes = chunk.reduce((acc, val) => acc + Math.pow(val, 3), 0),

      isDivisibleByTwo = sumCubes % 2 === 0,

      reverse = function (s) {
        return s.reverse();
      },

      rotate = function (s) {
        return s.concat(s.shift());
      },

      action = isDivisibleByTwo ? reverse : rotate;

    chunks.push(action(chunk.slice(0)).join(''));
    return doRevRot(elms, --chunkNums, chunks);
  };


  const nunberOfChunks = sz < 1 || str.length < sz ? 0 : Math.floor(str.length / sz);

  return doRevRot(str.split(''), nunberOfChunks, []).join('');
};
