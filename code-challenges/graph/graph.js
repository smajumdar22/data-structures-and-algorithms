'use strict';

const Node = require('./node.js')

class Graph {
    constructor() {
       
    }


    addNode(value) {
        if (!this.nodes) this.nodes = [];
        let node = new Node(value);
        this.nodes.push(node);
    }

    addEdge(originVal, destVal, weight) {
        for (let i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i].val === originVal) {
                this.nodes[i].connections.push({ destVal, weight });
                return;
            }
        }
    }

    removeAdjacent(node) {
        const index = this.adjacents.indexOf(node);
        if (index > -1) {
            this.adjacents.splice(index, 1);
            return node;
        }
    }

    getNodes() {
        let vals = [];

        for (let i = 0; i < this.nodes.length; i++) {
            vals.push(this.nodes[i].val);
        }

        return vals.length ? vals : null;
    }


    size() {
        return this.nodes.length
    }

    getNeighbors(val) {
        let node;
        let neighbors;

        for (let i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i].val === val) {
                node = this.nodes[i];
            }
        }

        neighbors = [...node.connections];

        for (let i = 0; i < this.nodes.length; i++) {
            // iterate through all the other nodes (not A)

            for (let j = 0; j < this.nodes[i].connections.length; j++) {
                // given some node that is not A
                // iterate through its connections

                if (this.nodes[i].connections[j].destVal === val) {
                    // val: B, connections: [{destVal: 'A', weight: 1}]
                    // destVal ?= val >> 'A' ?= 'A'

                    neighbors.push({
                        destVal: this.nodes[i].val,
                        weight: this.nodes[i].connections[j].weight,
                    });
                    //continue;
                }
            }
        }

        return neighbors;
    }

}

module.exports = Graph;