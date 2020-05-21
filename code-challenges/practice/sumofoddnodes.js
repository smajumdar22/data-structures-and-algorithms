'use strict';

class Node{
constructor(value){
    this.value= value;
    this.left = null;
    this.right = null;
}
}

class Tree{
    constructor(root=null){
        this.root = root;
    }
}

let sum=0;
const sumOfOddNodes =(root)=>{
  let root = this.root;

  if(root === null) return;

  if(root.value % 2 !==0){
    sum += root.value;
  }
  if(root.left.value % 2 !== 0){
      sumOfOddNodes(root.left.value);
  }
  if(root.right.value % 2 !== 0){
    sumOfOddNodes(root.right.value);
}
return sum;
}