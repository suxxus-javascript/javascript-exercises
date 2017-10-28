

module.exports = function () {
  const args = [].slice.call(arguments);
  const longest = args.reduce((acc, val) => Math.max(acc, val.length), 0);
  const len = args.length;
  let i = 0;
  let j = 0;
  const combined = [];

  while (i < longest) {
    while (j < len) {
      if (args[j][i]) {
        combined.push(args[j][i]);
      }
      j += 1;
    }
    j = 0;
    i += 1;
  }
  return combined;
};
