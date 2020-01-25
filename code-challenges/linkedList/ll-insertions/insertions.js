

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
  
<<<<<<< Updated upstream
  
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
=======

append(element) 
{ 

    let node = new Node(element); 
  
    let current; 
  
    // if list is Empty add the element and make it head 
    if (this.head == null) 
        this.head = node; 
    else { 
        current = this.head; 
  
        while (current.next) { 
            current = current.next; 
        } 
  
        current.next = node; 
    } 
    this.size++; 
} 
insertBefore(value,newValue){
  if(!this.head){
    this.head = new Node(value);
    return;
  }
  if (index === 0){
    this.insertToHead(value);
    return;
  }
  let node = new Node(value);
  let current,previous;
  let count = 0;
  //current will be first
  current =  this.head;
  while(count<newValue){
    previous = current;
    count++;
    current =  current.next;
  }
  node.next = current;
  previous.next = node;
  this.size++;
}
    
  }

  /**
   * Test
   */
  let test = new LinkedList();
  
  describe ('tests our linked list implementation and methods', () => {
    beforeEach(() => {
      test = new LinkedList();
    })
  
    it ('can append a node', () => {
      test.append(1)
      test.append(3)
      test.append(2)
      test.append(5)
      expect(test.tail.value).toEqual(5)
    })
  
    it ('will return true if a searched value exists in a linked list', () =>{
      test.append(1)
      test.append(3)
      test.append(2)
      expect(test.insertBefore(3,5)).toEqual(5)
    })
  
  })  

  
  
  
