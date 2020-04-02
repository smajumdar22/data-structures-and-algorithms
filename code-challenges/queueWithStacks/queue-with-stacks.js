'use strict';

const Stack = require('./stacks.js');

module.exports = class PseudoQueue {
  constructor() {
    this.Stack1 = new Stack();
    this.Stack2 = new Stack();
  }

  enqueue(value) {
    if( value === null ) {
      return -1;
    }
    else {
      this.Stack1.push(value);
    }
  }

  dequeue() {
    while(this.Stack1.top !== null) {
      let current = this.Stack1.pop();
      this.Stack2.push(current); 
    }

    return this.Stack2.pop();
  }
}
