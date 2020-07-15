'use strict';

const Node = require('./node.js')

class Graph {
    constructor() {
        this.adjacents = [];
        this.AdjList = new Map()
    }


    addNode(value) {
        const newNode = new Node(value);
        this.adjacents.push(newNode);

        this.AdjList.set(value, []);
        return newNode;
    }

    addEdge(v, w) {
        // get the list for vertex v and put the 
        // vertex w denoting edge between v and w 
        this.AdjList.get(v).push(w);

        //  graph is undirected, add an edge from w to v also 
        this.AdjList.get(w).push(v);
    }

    removeAdjacent(node) {
        const index = this.adjacents.indexOf(node);
        if (index > -1) {
            this.adjacents.splice(index, 1);
            return node;
        }
    }

    getNodes() {
        return this.adjacents;
    }


    size() {
        return this.adjacents.length
    }

    getNeighbors(node) {
        return this.adjacents.indexOf(node) > -1;
    }

}

module.exports = Graph;