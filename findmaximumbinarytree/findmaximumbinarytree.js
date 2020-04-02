'use strict';
const getMaxVal=() =>{
    if (this.root === null) {
       throw "Empty tree!";
    }
    let currNode = this.root;
    
    while (currNode.right !== null) {
       currNode = currNode.right;
    }
    return currNode.data;
 }

 module.exports = getMaxVal;