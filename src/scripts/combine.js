'use strict';

module.exports = function() {
  
    var args = [].slice.call(arguments);
    var longest = args.reduce(function(acc, val) {
        return Math.max(acc, val.length);
    }, 0);
    var len = args.length;
    var i = 0;
    var j = 0;
    var combined = [];
  
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
