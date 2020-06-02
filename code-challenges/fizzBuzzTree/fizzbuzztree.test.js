'use strict';

const BinarySearchTree = require('./binarysearchtree.js');
const fizzBuzzTree = require('./fizz-buzz-tree.js');


describe('fizzBuzzTree', () => {
    it('can change to FizzBuzz', () => {

        let tree = new BinarySearchTree(240);
        tree.add(100);
        tree.add(360);
        fizzBuzzTree(tree);
        expect(tree.root.value).toBe('FizzBuzz');
        expect(tree.root.left.root.value).toBe('Buzz');
        expect(tree.root.right.root.value).toBe('Fizz');

    });

    it('can change to String', () => {
        let tree = new BinarySearchTree(276);
        fizzBuzzTree(tree);
        expect(tree.root.value).toBe('276')

    });
});