'use strict';
class Node {
    constructor(value){
      this.value = value
      this.next = null;
  
    }
  }

  //iterate a linkedlist using a while loop
  
  class LinkedList {
    constructor(){
      this.head = null
      this.size = 0
    }

  
    insert (element){
      if (!this.head){
        this.head = new Node(element);
      } else {
        let initialHead = this.head;
        this.head = new Node(element);
        this.head.next = initialHead;
      }
      return this.head
    }

    // add to end of list
    append(element){
      if (!this.head){
        this.head = new Node(element)
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = new Node (element)
      }
      this.size++
    }
  
    includes(index) {
      let current = this.head;
      //let count = 0;
      while(current) {
          if(current.value === index) {
              console.log(current.data);
              return true;
          }
          //count++;
          current = current.next;
      }
      return false;
  }
  
  
    toString (){
      let current = this.head;
      let llString = '';
  
      while (current){

        console.log(llString += `{${current.value}} ->`);
        current = current.next;
      }
      return llString + 'NULL';
    }
    
    firstOdd(){
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
  remDuplicates(head) {

    if(!head) return ;
    const set = new Set();
    const hash = {};
    hash.next = head;
    let prev = hash;
    let curr = head;
    while (curr) {
        if (set.has(curr.value)) {
            prev.next = curr.next;
        } else {
            prev = curr;
            set.add(curr.value);
        }
        curr = curr.next;
    }
    return hash.next;
}

  }
  
  module.exports = LinkedList;