 (function IIFE() {

  function typeOf(obj) {
    return Object.prototype.toString.call(obj);
  }

  function stringifyJSON(obj) {
    var result = '';
    var val;
    console.log(typeOf(obj));

    switch ( typeOf(obj) ) {
      case '[object String]':
        console.log("in string");
        result += '"' + val + '"';
        break;

      case '[object Number]':
        console.log("in number");
        result += obj;
        break;

      case '[object Array]':
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
  }

  this.stringifyJSON = stringifyJSON;

})();