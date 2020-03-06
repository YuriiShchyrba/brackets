module.exports = function check(braces, bracketsConfig) {
  var arr = [];
  if (braces[0] == "}" || braces[0] == "]" || braces[0] == ")") return false;
  var map = { "{": "}", "[": "]", "(": ")" };
  for (var i = 0; i < braces.length; i++) {
      var q = map[arr[arr.length - 1]];
      var qq = braces[i];
      if (braces[i] == "{" || braces[i] == "[" || braces[i] == "(") {
          arr.push(braces[i]);
      }
      else if (map[arr[arr.length - 1]] == braces[i]) {
          arr.pop();
      }
      else {
          arr.push(braces[i]);
      }

  }

  if (arr.length == 0) return true;

  return false;
}
