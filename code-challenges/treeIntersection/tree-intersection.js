'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree{
    constructor(root){
        this.root = new Node(root);
    }
}

const nodeCount = (node, element) => {
    if (!node.value) {
        return;
    }
    if (element[node.value]) {
        element[node.value]++
    } else {
        element[node.value] = 1;
    };

    if (node.left) {
        nodeCount(node.left, element);
    }
    if (node.right) {
        nodeCount(node.right, element);
    }
};

const checkNode = (node, element, arr) => {
    if (!node.value) {
        return;
    }

    if (element[node.value]) arr.push(node.value);

    if (node.left) {
        checkNode(node.left, element, arr);
    }
    if (node.right) {
        checkNode(node.right, element, arr);
    }
};

const treeIntersection = (node1, node2) => {
    if (!node1 || !node2 || node1.constructor.name !== 'Node' || node2.constructor.name !== 'Node') {
        return false;
    }
    const nodesPresent = {};
    const final = [];

    nodeCount(node1, nodesPresent);
    checkNode(node2, nodesPresent, final);

    return final;
};

module.exports = {BinaryTree, Node ,treeIntersection };