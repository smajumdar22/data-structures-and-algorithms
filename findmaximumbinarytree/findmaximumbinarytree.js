'use strict';
function getMaxVal(){
    if (this.root === null) {
       throw "Invalid tree";
    }
    let currNode = this.root;
    
    while (currNode.right !== null) {
       currNode = currNode.right;
    }
    return currNode.value;
 }

 module.exports = getMaxVal;