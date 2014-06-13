// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var els = [];
  var node = document.body;

  // walking the dom
  var recursiveGet = function(node) {
    var children = node.childNodes;

    if ( node.nodeType === Node.ELEMENT_NODE && node.classList.contains(className) ) {
      els.push(node);
    }

    _.each(children, recursiveGet);
  };

  recursiveGet(node);

  return els;
};
