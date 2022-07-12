/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var brackets = []
    var len = s.length ; 
    var map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
    for (var i = 0; i < len; i++) {
    if (brackets.length > 0 && map[brackets[brackets.length - 1]] === s[i]) {
      brackets.pop();
    } else {
      brackets.push(s[i]);
    }
  }
  return brackets.length === 0;
};