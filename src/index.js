module.exports = function check(braces, bracketsConfig) {
  var arr = [];
  var config = new Map(bracketsConfig);

  for ( var start of config.values())
  {
    if ( braces[0] == start)
    {
      return false;
    }
  }

  for ( var i = 0 ; i < braces.length; i++)
  {
    if ( config.has(braces[i]))
    {
      arr.push(braces[i]);
    }
    else if ( braces[i] == config.get(arr[arr.length-1]))
    {
      arr.pop();
    }
    else{
      return false;
    }
  }

  if (arr.length == 0) return true;

  return false;
}
