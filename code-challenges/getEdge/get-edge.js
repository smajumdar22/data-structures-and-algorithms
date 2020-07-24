'use strict';


function getEdges(graph,cityArr){

    let price = 0

    if ( cityArr.length < 2)
        return (false, 0)
    for(let i=0; i<cityArr.length; i++){

        let neighbors = graph.getNeighbors(cityArr[i-1])
        let current = cityArr[i]

        if (current in neighbors){

            price += neighbors[current];
        }
        else{

            return (false, 0)
        }
    }

    return (true, price);
    
}

module.exports = getEdges;