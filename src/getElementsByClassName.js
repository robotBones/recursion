// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var els = [];
  var node = document.body;

  var recurser = function(node) {
    var children = node.childNodes;

    if ( node.nodeType === 1 && node.classList.contains(className) ) {
      els.push(node);
    }

    for (var i = 0; i < children.length; i++) {
      recurser(children[i]);
    }
  }

  recurser(node);

  return els;
};
