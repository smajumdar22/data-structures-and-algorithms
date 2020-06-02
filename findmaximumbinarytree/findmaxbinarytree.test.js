'use strict';

const  getMaxVal = require('./findmaximumbinarytree.js')
const BinarySearchTree = require('./binarysearchtree.js');

let BST = new BinarySearchTree();
BST.add(10);
BST.add(15);
BST.add(5);
BST.add(50);
BST.add(3);
BST.add(7);
BST.add(12);
let maxTree = BST.getMaxVal()
describe('Test', () => {
    it('Can find the max node', () => {
        let tree = {value: 15, left:{value: 9, left: {value: 7}}, right:{value: 11, left: {value: 10}}};;
        let maxVal = tree.getMaxVal();
        expect(maxVal).toEqual(15);
    });
});