'use strict';

function fizzBuzzTree(node) {

  if (!node) return 'Must be a valid value';
  if (typeof node.root.value !== 'number') return 'Need to be a number'

  if (typeof node.root.value === 'number') {

    if (node.root.value % 3 === 0 && node.root.value % 5 === 0) {
      node.root.value = 'FizzBuzz';
    } else if (node.root.value % 3 === 0) {
      node.root.value = 'Fizz';
    } else if (node.root.value % 5 === 0) {
      node.root.value = 'Buzz';
    }else{
      node.root.value = node.root.value.toString();
    }
  }

  if (node.left) {

    fizzBuzzTree(node.left);
  }
  if (node.right) {

    fizzBuzzTree(node.right);
  }
  return node;
};



module.exports = fizzBuzzTree;
