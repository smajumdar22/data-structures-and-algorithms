const Graph = require('../graph.js')


let g = new Graph(6);
let vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

// adding vertices 
for (let i = 0; i < vertices.length; i++) {
    g.addNode(vertices[i]);
}

// adding edges 
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

describe('Graph test', () => {
    it('can test graphs', () => {
        const testGraph = new Graph();
        const test1 = testGraph.addNode('A');
        const test2 = testGraph.addNode('B');
        const test3 = testGraph.addNode('C');
        const g = testGraph.getNodes();
        expect(g[0]).toBe(test1);
        expect(g[1]).toBe(test2);
        expect(g[2]).toBe(test3);
    })
})