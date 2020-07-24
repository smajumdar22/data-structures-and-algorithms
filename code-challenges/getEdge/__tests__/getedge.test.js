'use strict';

const Graph = require('../../graph/graph.js');
const getEdge = require('../get-edge.js');

describe('getedge test', () => {
    let test = new Graph();


    it('can test price between places', () => {
        const node1 = test.addNode('Pandora');
        const node2 = test.addNode('Arendelle');
        const node3 = test.addNode('Metroville');
        const node4 = test.addNode('New Monstropolis');
        const node5 = test.addNode('Narnia');
        const node6 = test.addNode('Naboo');

        test.addEdge(node1, node2, 150);
        test.addEdge(node1, node3, 82);
        test.addEdge(node2, node3, 99);
        test.addEdge(node2, node4, 42);
        test.addEdge(node3, node4, 105);
        test.addEdge(node3, node5, 37);
        test.addEdge(node3, node6, 26);
        test.addEdge(node4, node6, 73);

        expect(
            getEdge(test, ['Arendelle', 'New Monstropolis', 'Naboo'])
        ).toMatchObject([true, 115]);

        expect(getEdge(test, ['Naboo', 'Pandora'])).toMatchObject([false, 0]);


    });
});