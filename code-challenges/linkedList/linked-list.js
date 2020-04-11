'use strict';
class Node {
    constructor(value){
      this.value = value
      this.next = null;
  
    }
  }
  
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
  
  }
  
  module.exports = LinkedList;