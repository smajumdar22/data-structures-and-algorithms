'use strict';

const LinkedList = require('./lib/linkedlist.js')

  
  const llmerge =(l1, l2) => {
    //let newLinkedlist = new LinkedList();

    if(!l1 || l1.head) return l2;
    if(!l2 || l2.head) return l1;

    let l1head = l1.head;
    let l2head = l2.head;

    while (l1head && l2head) {
      let current = l1head.next;
      l1head.next = l2head;
      l2head = current;
      l1head = l1head.next;
    }

    if(l2head) {
      l1head.next = l2head
    }
    
    return l2;
  };

  
module.exports = llmerge;
