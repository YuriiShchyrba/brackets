module.exports = function check(braces, bracketsConfig) {
  var sum = 0;
    if (braces[0] == "}" || braces[0] == "]" || braces[0] == ")") return false;
    var map = { "{": "}", "[": "]", "(": ")" };
    for (var i = 0; i < braces.length; i++) {
        var q = map[arr[arr.length - 1]];
        var qq = braces[i];
        if (braces[i] == "(") {
            sum++;
        }
        else if (braces[i] ==")") {
            sum--;
        }
    }

    if (sum == 0) return true;

    return false;
}
