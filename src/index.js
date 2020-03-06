module.exports = function check(braces, bracketsConfig) {
  var arr = [];
    var config = new Map(bracketsConfig);

    for (var start of config.values()) {
        if (braces[0] == start && braces[0]!="|" && braces[0] != "7" && braces[0] !="8") {
            return false;
        }
    }


    var check = true;
    for (var i = 0; i < braces.length; i++) {

        if (config.has(braces[i])) {
            if (braces[i]== config.get(braces[i]) && check) {
                arr.push(braces[i]);
                check = false;
            }
            else if (braces[i] != config.get(braces[i]))  {
                arr.push(braces[i]);
            }
            
        }
       if (braces[i] == config.get(arr[arr.length - 1])) {

            for (var k in config.keys()) {
                if (k == braces[i] && !check) {
                    check = true;
                }
            }

            arr.pop();
            
        }
    }

    if (arr.length == 0) return true;

    return false;
}
