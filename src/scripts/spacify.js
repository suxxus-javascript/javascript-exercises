
String.prototype.spacify = function () {
  return this.split('')
    .filter(e => e !== ' ')
    .join(' ');
};
