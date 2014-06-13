 (function IIFE() {

  var typeOf = function(obj) {
    return Object.prototype.toString.call(obj);
  }

  var stringifyJSON = function(obj) {
    var result = '';
    var tempList = []; // using Array.join(",") to deal with commas in objects and arrays
    var val;

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
        result += '[';
        for (var i = 0; i < obj.length; i++) {
          val = obj[i];
          tempList.push(stringifyJSON(val));
        }
        result += tempList.join(",");
        result += ']';
        break;

      case '[object Object]':
        result += '{';
        for (key in obj) {
          if ( obj.hasOwnProperty(key) ) {
            val = obj[key];
            // functions and 'undefined' are not allowed in JSON
            if ( typeof val !== 'function' && typeof val !== 'undefined') {
              tempList.push('"' + key + '":' + stringifyJSON(val));
            }
          }
        }
          // join() won't add any commas when tempList is an empty array
        result += tempList.join(",");
        result += '}';
        break;

      default:
        throw new Error("switch statement defaulted!");
        break;
    }

    return result;
  };

  this.stringifyJSON = stringifyJSON;

})();