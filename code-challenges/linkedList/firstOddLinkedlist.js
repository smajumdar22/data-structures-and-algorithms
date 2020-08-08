'use strict'

const LinkedList = require('./linked-list');

class Node {
    constructor(value){
      this.value = value
      this.next = null;
  
    }
  }

function firstOdd(){
    if(!this.head){
        return 'Invalid';
    }
    else{
        let curr = this.head;
        if(curr.value %2 !==0){
            return curr.value;

        }else{

            while(curr.next){
                if(curr.next.value %2 !== 0 ){
                    return curr.next.value;
                }else{
                    curr = curr.next;
                }
            }
        }
    }
}

module.exports = firstOdd;