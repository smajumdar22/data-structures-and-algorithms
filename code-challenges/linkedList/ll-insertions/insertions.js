

class Node{
    constructor(element){
      this.element = element;
      this.next = null;
      this.size = 0;
    }
  }
  
  class LinkedList{
    constructor(){
      this.head = null;
    }
  
  
    append(element){
      let node = new Node(element);
      let current;

  
      if(!this.head){
        this.head = node;
        this.size++;
        return;
      }

      current = this.head;
  
      while(current.next!==null){
        current = current.next; 
      }
      current.next = node;
      this.size++;
    }
    
  }
  
  
  