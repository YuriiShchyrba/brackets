module.exports = function check(braces, bracketsConfig) {
  var arr = [];
    var config = new Map(bracketsConfig);

    for (var start of config.values()) {
        if (braces[0] == start && braces[0]!="|" && braces[0] != "7" && braces[0] !="8") {
            return false;
        }
    }


    var check = true, iterration = true;
    for (var i = 0; i < braces.length; i++) {


        var one = braces[i];
        var two = config.has(braces[i]);
        var tree = config.get(braces[i]);
        var four = config.get(arr[arr.length - 1]);
        if (config.has(braces[i]) && iterration) {
            if (braces[i]== config.get(braces[i]) && check) {
                arr.push(braces[i]);
                check = false;
                iterration = false;
            }
            else if (braces[i] != config.get(braces[i]))  {
                arr.push(braces[i]);
                iterration = false;
            }
            
        }
        if (braces[i] == config.get(arr[arr.length - 1]) && iterration) {

            for (var k of config.keys()) {
                if (k == braces[i] && !check) {
                    check = true;
                }
            }

               arr.pop();

            iterration = false;
            
        }

        iterration = true;
    }

    if (arr.length == 0) return true;

    return false;
}
