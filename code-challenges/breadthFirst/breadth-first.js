'use strict';

//breadth first search tree
const breadthFirst = (root, arr) => {
  if (!root){
    return 'Root is empty.';
  }
  const queue = [];
  queue.push(root);

  while(queue.length > 0) {
    let current = queue.shift();

    console.log(current.value);
    arr.push(current.value);
    if(current.left) queue.push(current.left);
    if(current.right) queue.push(current.right)
  }

  return arr;
};

module.exports = breadthFirst;