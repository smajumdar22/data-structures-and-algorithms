const Graph = require('../graph/graph.js')
const Queue = require('../stacksAndQueues/queue.js')


function breadthFirst(startingNode) 
{ 
  
    let visited = []; 
    for (let i = 0; i < this.noOfVertices; i++) 
        visited[i] = false; 
  
    let q = new Queue(); 
  
    visited[startingNode] = true; 
    q.enqueue(startingNode); 
  
    while (!q.isEmpty()) { 
        let getQueueElement = q.dequeue(); 
       
      
        let get_List = this.AdjList.get(getQueueElement); 
  
        for (let i in get_List) { 
            let testList = get_List[i]; 
  
            if (!visited[testList]) { 
                visited[testList] = true; 
                q.enqueue(testList); 
            } 
        } 
    } 
} 

module.exports = breadthFirst;