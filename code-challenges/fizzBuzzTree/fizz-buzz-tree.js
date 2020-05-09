'use strict';

const Node = require('./node.js');

const fizzBuzzTree =(root)=> {
  let replacementStr ='';
  if(root.val %3 === 0 && root.val %5 === 0 ) replacementStr += 'FizzBuzz';
  if(root.val %3 === 0) replacementStr += 'Fizz';
  if(root.val %5 === 0) replacementStr += 'Buzz';

  let newRoot = new Node(replacementStr ? replacementStr : `${root.val}`);

    if (root.left) {

    fizzBuzzTree(root.left);
  }
  if (root.right) {

    fizzBuzzTree(root.right);
  }

  return newRoot;
}

// function fizzBuzzTree(node) {

//   if (!node) return 'Must be a valid value';
//   if (typeof node.root.value !== 'number') return 'Need to be a number'

//  let replacementStr = '';
//   if (typeof node.root.value === 'number') {

//     if (node.val % 3 === 0 && node.val % 5 === 0) {
//       node.val = 'FizzBuzz';
//     } else if (node.val % 3 === 0) {
//       node.val = 'Fizz';
//     } else if (node.val % 5 === 0) {
//       node.val = 'Buzz';
//     }else{
//       node.val = replacementStr;
//     }
//   }

//   if (node.left) {

//     fizzBuzzTree(node.left);
//   }
//   if (node.right) {

//     fizzBuzzTree(node.right);
//   }
//   return new Node(node);
// };



module.exports = fizzBuzzTree;
