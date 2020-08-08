let depthFirstSearch = require('../depth-first.js');
const Graph = require('../../graph/graph.js');

describe('depth first function', () => {
  it('can provide path from populated graph', () => {
    let graph = new Graph();
    
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');


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
    expect(graph.depthFirstSearch('B')).toEqual('A');
  });
});
