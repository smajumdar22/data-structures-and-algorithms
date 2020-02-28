'use strict';

const fizzbuzzTree = (root) => {

  if (root === null){
    return;
  }

 
  if (root.value % 3 === 0 && root.value % 5 === 0){
    root.value = 'fizzbuzz';
  } else {
    if (root.value % 3 === 0){
      root.value = 'fizz';
    } else if (root.value % 5 === 0){
      root.value = 'buzz';
    }
  }

  fizzbuzzTree(root.left);
  fizzbuzzTree(root.right);

  return root;
};

module.exports = fizzbuzzTree;