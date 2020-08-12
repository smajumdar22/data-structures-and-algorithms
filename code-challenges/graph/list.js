
'use strict';
function returnList(graph){

     for (let i=0; i<graph.length; i++){
         let vertex = graph[i];
         str ='';
         for(let j=0; j< vertex.length; j++){
             if (vertex(j).getNeigbors()){
                 console.log(str += '->' + vertex[j]);
             }
         }
     }
}