// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node, els) {
  // your code here
  els = els || [];
  node = node || document.body;

  // walking the dom
  var children = node.children;
  console.log(children);

  if (node.classList.contains(className) ) {
    els.push(node);
  }

  if(children.length > 0){
    console.log(children.length);
    _.each(children, function (node, index, children){
      getElementsByClassName(className, node, els);
    });
  }

  return els;
};
