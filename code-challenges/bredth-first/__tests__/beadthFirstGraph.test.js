const BreadtFirstGraph = require('../breadth-first.js');

describe('breadth first graph', () => {
  let test = new BreadtFirstGraph();


  it('can perform breadth first search', () => {
    const firstNode = test.addNode('A');
    const secondNode = test.addNode('B');
    const thirdNode = test.addNode('C');
    const fourthNode = test.addNode('D');

    test.addEdge(firstNode, secondNode);
    test.addEdge(firstNode, thirdNode);
    test.addEdge(firstNode, fourthNode);

    const breadthList = test.breadthFirst(firstNode);
    expect(breadthList).toMatchObject([
      firstNode,
      secondNode,
      thirdNode,
      fourthNode,
    ]);
  });
});