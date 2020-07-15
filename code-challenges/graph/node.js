class Node {
    constructor(value) {
        this.value = value;
        this.visited = false;
        this.adjacentNode = [];
    }
}

module.exports = Node;