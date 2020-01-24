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
      //this.tail = null
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
  
  
    toString (){
      let current = this.head;
      let llString = '';
  
      while (current){
        llString += `${current.value}`
        current = current.next;
      }
      return llString;
    }
  
  }
  
  module.exports = LinkedList;