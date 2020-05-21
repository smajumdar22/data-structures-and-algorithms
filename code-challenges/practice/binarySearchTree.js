'use strict';

const BinaryTree = require('./binaryTree.js');

class BinarySearchTree extends BinaryTree{
    constructor(value){
        super(value);
    }

    add(val){
        if(val === undefined || !val || !this.root){
            return -1;
        }

        let root = this.root;

        if(val < root.value){
            if(!root.left){
                root.left = new BinarySearchTree(val);
            }else{
                root.left.add(val);
            }
        }
        else{
            if(!root.right){
                root.right = new BinarySearchTree(val);
            }else{
                root.right.add(val);
            }
        }
    }

    contains(val){
        let root = this.root;

        if(val === root.value){
            return true;
        }

        if(val < root.value){
            if(root.left){
                return root.left.contains(val);
            }
        }
        else{
             if(root.right){
                 return root.right.contains(val)
             }
        }
        return false;
    }
}

let tree = new BinarySearchTree('1');
tree.root.left = new BinarySearchTree('2');
tree.root.right = new BinarySearchTree('3');
tree.root.left.root.left = new BinarySearchTree('4');
tree.root.left.root.right = new BinarySearchTree('5');
tree.root.right.root.left = new BinarySearchTree('6');
console.log(tree);