'use strict';

const Node = require('../node');
const breadthfirst = require('../breadth-first.js');

class BinaryTree {
    constructor(root = null){
        this.root = root;
    }
}


describe('Test', () => {

    it('successfully traverses binary tree breadth first', () => {

        const rootTree = new Node(2);
        const rootTreeLeft = new Node(6);
        const rootTreeRight = new Node(8);
        const rootTreeLeft1 = new Node(4);
        const rootTreeLeft2 = new Node(5);
        const rootTreeRight1 = new Node(11);
        const rootTreeRight2 = new Node(1);

        rootTree.left = rootTreeLeft;
        rootTreeLeft.left = rootTreeLeft1;
        rootTreeLeft.right = rootTreeLeft2;

        rootTree.right = rootTreeRight;
        rootTreeRight.left = rootTreeRight1;
        rootTreeRight.right = rootTreeRight2;


        const tree = new BinaryTree(rootTree);
        const test = breadthfirst(tree.root, []);

        expect(test).toEqual([2,6,8,4,5,11,1]);
        expect(test.length).toEqual(7);

    });
});