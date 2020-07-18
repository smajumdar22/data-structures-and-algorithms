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
         testGraph.addNode('A');
        testGraph.addNode('B');
        testGraph.addNode('C');
        const g = testGraph.getNodes();
        expect(g).toEqual(['A', 'B', 'C']);
    });
});

    describe('our graph works?', () => {
        it('can add a node to the graph and can give me all the nodes', () => {
            let graph = new Graph();
    
            graph.addNode('A');
            graph.addNode('B');
            graph.addNode('C');
            graph.addNode('D');
    
            let nodes = graph.getNodes();
    
            expect(nodes.length).toBe(4);
            expect(nodes).toEqual(['A', 'B', 'C', 'D']);
        });
    
        it('can add an edge to the graph', () => {
            let graph = new Graph();
    
            graph.addNode('A');
            graph.addNode('B');
    
            graph.addEdge('A', 'B', 2);
    
            // nodes[0] = Node = {val: 'A', connections: [{'B', 2}]}
    
            expect(graph.nodes[0]).toMatchObject({
                val: 'A',
                connections: [{ destVal: 'B', weight: 2 }],
            });
        });
    
        it('can give me all the neighbors', () => {
            let graph = new Graph();
    
            graph.addNode('A');
            graph.addNode('B');
            graph.addNode('C');
            graph.addNode('D');
    
            // val: A, connections: [{B, 2}, {C, 4}]
            // val: B, connections: [{A, 1}]
            // val: C, connections: []
            // val: D, connections: [{B, 5}]
    
            graph.addEdge('A', 'B', 2);
            graph.addEdge('A', 'C', 4);
            graph.addEdge('B', 'A', 1);
            graph.addEdge('D', 'B', 5);
    
            expect(graph.getNeighbors('A')).toEqual([
                { destVal: 'B', weight: 2 },
                { destVal: 'C', weight: 4 },
                { destVal: 'B', weight: 1 },
            ]);
            expect(graph.getNeighbors('B')).toEqual([
                { destVal: 'A', weight: 1 },
                { destVal: 'A', weight: 2 },
                { destVal: 'D', weight: 5 },
            ]);
        });
    
        it('can tell me the size of nodes', () => {
            let graph = new Graph();
    
            graph.addNode('A');
            graph.addNode('B');
            graph.addNode('C');
            graph.addNode('D');
    
            expect(graph.size()).toBe(4);
        });
    
        it('can return a graph with one node and one edge', () => {
            let graph = new Graph();
    
            graph.addNode('A');
            graph.addEdge('A', 'A', 5);
    
            expect(graph.nodes[0]).toMatchObject({
                val: 'A',
                connections: [{ destVal: 'A', weight: 5 }],
            });
        });
    
        it('can return an empty graph', () => {
            let graph = new Graph();
    
            expect(graph.nodes).not.toBeDefined();
        });
});