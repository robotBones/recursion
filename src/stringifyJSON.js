 (function IIFE() {

  var p = function (str) {
    console.log(str);
  };

  var typeOf = function(obj) {
    return Object.prototype.toString.call(obj);
  }

  var stringifyJSON = function(obj) {
    var result = '';
    var val;
    console.log(typeOf(obj));

    switch ( typeOf(obj) ) {
      case '[object Boolean]':
        result += obj;
        break;

      case '[object Null]':
        result += obj;
        break;

      case '[object String]':
        result += '"' + obj + '"';
        break;

      case '[object Number]':
        result += obj;
        break;

      case '[object Array]':
        console.log('in Array');
        for (key in obj) {
          val = obj[key];
          result += ['[', stringifyJSON(val), ']'].join('');
        }
        break;

      case '[object Object]':
        for (key in obj) {
          result += '"' + key + '":';
          val = obj[key];
          result += ['{', stringifyJSON(val), '}'].join('');
        }
        break;

      default:
        console.log('in default');
        break;
    }
    // add comma seperator after every key:val
    result += ',';
    console.log(result);

    // remove comma on last val
    return result.slice(0,-1);
  };

  this.stringifyJSON = stringifyJSON;

})();