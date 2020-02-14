'use strict';

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Stack {
    constructor() {
      this.top = null;
    }
  
    push(value) {
      if(value === null) {
        return `Invalid`;
      }

      let newNode = new Node(value);
  
      if(!this.top) {
        this.top = newNode;
      }
    
      else {
        newNode.next = this.top;
        this.top = newNode;
      }
    }
  
    pop() {
      if(this.top === null) {
        return `empty!`;
      }
      let temp = this.top;
      this.top = temp.next;
      temp.next = null;
      return temp.data;
    }
  
    peek() {
      if(!this.top) {
        return `empty!`;
      }
      else {
        return this.top.data;
      }
    }
  }


class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }


  enqueue(value) {
    if(value === null) {
      return `Please provide a valid value`;
    }

    let newNode = new Node(value);


    if(!this.front) {
      this.front = newNode;
      this.rear = newNode;
    }
    
    else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }
  
  dequeue() {
    if(this.front === null) {
      return `Queue is empty!`;
    }

    let temp = this.front;
    this.front = temp.next;
    temp.next = null;

    return temp.data;

  }

  peek() {
    if(!this.front) {
      return `empty!`;
    }
    return this.front.data;
  }
}



  /**Tests */

  describe('Stacks', () => {
    let stack = new Stack();
    it('Can successfully instantiate an empty stack', () => {
      expect(stack.top).toBe(null);
    }); 
  });
  
  

  