
'use strict';

const Linkedlist = require('../linked-list.js');
  
    class LLKthFromEnd extends Linkedlist{
      constructor(){
        super();
        this.head = null;
      }
      llKthFromEnd(element){
        let current = this.head;
      let length = 0;
  
      while(current){
        length++;
        current = current.next;
      }
  
      if(element >= length){
        return 'Invalid';
      }
      for(let i = 1; i < length - element; i++){
        current = current.next;
      }
      return current.value;
        
      }
    }

    module.exports=LLKthFromEnd;
  
    