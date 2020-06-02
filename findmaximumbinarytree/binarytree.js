'use strict';

const Node = require('./node.js');

class BinaryTree{
    constructor(root){
        this.root = new Node(root);
    }

    preOrder(){
        let root = this.root;
        let arr = [];
        arr.push(root.value);

        if(root.left){
            arr.push(...root.left.preOrder());
        }

        if(root.right){
            arr.push(...root.right.preOrder());
        }
        return arr;
    }

    inOrder(){
        let root = this.root;
        let arr = [];
        
        if(root.left){
            arr.push(...root.left.inOrder());
        }
        arr.push(root.value);

        if(root.right){
            arr.push(...root.right.inOrder());
        }
        return arr;

    }

    postOrder(){
        let root = this.root;
        let arr = [];
        
        if(root.left){
            arr.push(...root.left.postOrder());
        }

        if(root.right){
            arr.push(...root.right.postOrder());
        }
        arr.push(root.value);
        return arr;

    }
}

module.exports = BinaryTree;