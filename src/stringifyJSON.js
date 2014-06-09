// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
function howNested(n) {
  var thingy = "*";
  var result = "";
  for ( var i = 0; i < n; i++) {
      result += thingy;
  }
  return result;
}
var x = {
  a: 1,
  2: "two",
  c: [],
  d: {2: [3,4]},
  e: "all above"
}
console.log();
console.log();
console.log("//////////////////////////////////////////////////////////////////////");
var layer = 0;
var stringifyJSON = function(obj) {
  // your code goes here
  var JSON = '';
  layer += 1

  for (key in obj) {
    console.log(howNested(layer) + Object.prototype.toString.call(obj[key]) + " - " + key + ":",obj[key]);
    var type = Object.prototype.toString.call(obj[key]);
    if (type !== '[object Object]' && type !== '[object Array]') {
      JSON += key + ":" + obj[key] + ",";
    }
    else if (type === '[object Object]') {
      JSON += key + ":" + stringifyJSON(obj[key]);
    } else if (type === '[object Array]') {
      var ar =
      JSON += [key,":","[", stringifyJSON(obj[key]), "]"].join("");
    }
  }


  layer -= 1;
  if (layer === 0) {
    JSON = JSON.slice(0,-1);
    return ['{',JSON,'}'].join("")
  } else {
    return JSON;
  }

};


var output = stringifyJSON(x);
console.log("//////////////////////////////////////////////////////////////////////");
console.log();
console.log();
console.log();
console.log();
console.log();
console.log("object: ",x);
console.log("JSON: "+JSON.stringify(x));
console.log("myJunk: ", output);
