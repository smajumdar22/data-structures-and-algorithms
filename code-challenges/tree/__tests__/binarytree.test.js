'use strict';

const BinarySearchTree = require('../binarySearchTree.js');

let tree = new BinarySearchTree('1');
tree.root.left = new BinarySearchTree('2');
tree.root.right = new BinarySearchTree('3');
tree.root.left.root.left = new BinarySearchTree('4');
tree.root.left.root.right = new BinarySearchTree('5');
tree.root.right.root.left = new BinarySearchTree('6');

describe('can validate a tree', () => {
    it('can initialize an empty tree', () => {
        expect(tree.constructor.name).toBe('BinarySearchTree');
    });
    it('can initialize a tree with single node', () => {
        let singleNodeTree = new BinarySearchTree(1);
        expect(singleNodeTree.root.value).toBe(1);
        expect(singleNodeTree.root.left).toBeNull();
        expect(singleNodeTree.root.right).toBeNull();
    });
    it('can return a tree in preOrder', () => {
        expect(tree.preOrder()).toEqual(['1', '2', '4', '5', '3', '6']);
    });
    it('can return a tree in postOrder', () => {
        expect(tree.postOrder()).toEqual(['4', '5', '2', '6', '3', '1']);
    });
    it('can return a tree in inOrder', () => {
        expect(tree.inOrder()).toEqual(['4', '2', '5', '1', '6', '3']);
    });
    it('can successfully add a left child and right child', () => {
        let tree = new BinarySearchTree(200);
        tree.add(100);
        tree.add(400);
        expect(tree.root.left.root.value).toBe(100);
        expect(tree.root.right.root.value).toBe(400);
    });
    it('can check if tree contains value', () => {
        let tree = new BinarySearchTree(100);
        tree.add(200);
        tree.add(300);
        tree.add(400);
        tree.add(500);
        expect(tree.contains(800)).toBe(false);
        expect(tree.contains(200)).toBe(true);
    });
});