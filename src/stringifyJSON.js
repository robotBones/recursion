(function IIFE() {

  function typeOf(obj) {
    return Object.prototype.toString.call(obj);
  }

  function stringifyJSON(obj) {
    var result = '';
    var val;
    for (key in obj) {
      val = obj[key];

      if (typeOf(obj) !== '[object Array]') {
        result += '"' + key + '":';
      }

      switch ( typeOf(val) ) {
        case '[object String]':
          result += '"' + val + '"';
          break;

        case '[object Number]':
          result += val;
          break;

        case '[object Array]':
          result += stringifyJSON(val);
          break;

        case '[object Object]':
          result += stringifyJSON(val);
          break;

        default:
          throw new Error('Something happend in stringifyJSON switch statement.');
          break;
      }
      // add comma seperator after every key:val
      result += ',';
    }// end of object traversal
    // remove comma on last val
    result = result.slice(0,-1);

    if (typeOf(obj) === '[object Object]') {
      return ['{', result, '}'].join('');
    } else {
      return ['[', result, ']'].join('');
    }
  }

  this.stringifyJSON = stringifyJSON;
})();