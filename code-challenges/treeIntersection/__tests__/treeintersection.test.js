
const {Node, BinaryTree, treeIntersection} = require('../tree-intersection.js');


describe('Test Tree Intersection', () => {
    test('can test two non identical trees', () => {
        const tree = new BinaryTree(1);
        tree.root.left = new Node(2);
        tree.root.right = new Node(3);
        tree.root.left.left = new Node(4);
        tree.root.right.right = new Node(5);

        const tree2 = new BinaryTree(8);
        tree2.root.left = new Node(9);
        tree2.root.right = new Node(10);
        tree2.root.left.left = new Node(11);
        tree2.root.right.right = new Node(12);

        expect(treeIntersection(tree.root, tree2.root)).toEqual([]);
    });
    test('can test common nodes', () => {
        const tree = new BinaryTree(1);
        tree.root.left = new Node(2);
        tree.root.right = new Node(3);
        tree.root.left.left = new Node(4);
        tree.root.right.right = new Node(5);

        const tree2 = new BinaryTree(44);
        tree2.root.left = new Node(45);
        tree2.root.right = new Node(3);
        tree2.root.left.left = new Node(7);
        tree2.root.right.right = new Node(8);

        expect(treeIntersection(tree.root, tree2.root)).toEqual([3]);
    });
});