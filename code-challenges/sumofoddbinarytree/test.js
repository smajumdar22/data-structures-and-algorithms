'use strict';

const  sumofoddbinarytree = require('./sumofoddbinarytree.js/index.js')

let BST = new BinarySearchTree();
BST.insertRec(10);
BST.insertRec(15);
BST.insertRec(5);
BST.insertRec(50);
BST.insertRec(3);
BST.insertRec(7);
BST.insertRec(12);
console.log(BST.sumOfOdd());

describe('Test', () => {
    it('Can successfully change node value to FizzBuzz', () => {
        let tree = {value: 15, left:{value: 9, left: {value: 7}}, right:{value: 11, left: {value: 10}}};;
    
        expect(tree.sumOfOdd()).toEqual(42);
    });
});