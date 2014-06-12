// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var els = [];
  console.log();
  console.log();
  console.log("inside new fn context");
  console.log('is node defined: ', node);
  var node = node || document.body;
  var nodes = node.childNodes;
  var element;
  console.log('node for this context is: ', node);
  console.log('childNodes: ', nodes);
  for (var i = 0; i < 4; i++) {
    console.log('in loop');
    element = nodes[i];
    console.log('classlist: ',nodes[0].classList);
    // check if element is an element node. Only those have classList property
    if ( element.nodeType === 1 && element.classList.contains(className) ) {
      console.log(element);
      console.log('passed conditions');
      console.log(element.tagName, 'has class' );
      els.push(element);
    }
    console.log('should be looping', i);
  }
  console.log('about to return: ', els);
  return els;
};
