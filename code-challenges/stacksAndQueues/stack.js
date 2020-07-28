const Node = require('./node.js');

// To traverse a stack is while notEmpty and then pop
class Stack {
    constructor() {
        this.top = null;
    }

    push(val) {
        let nodeToPush = new Node(val);

        //3:03 -  3:18      ->Stacks
        //3:18 -  3:25      ->Queue
        //3:30 -  3:50      ->Linkedlist
        //3:54 -            ->Tree
        // is the stack empty?
        if (this.isEmpty()) {
            this.top = nodeToPush;
            return;
        }

        nodeToPush.next = this.top;
        this.top = nodeToPush;
    }

    pop() {
        let nodeToPop = this.top;

        // is the stack empty?
        if (this.isEmpty()) {
            throw 'NullReferenceException';
            return;
        }

        this.top = this.top.next;
        nodeToPop.next = null;

        return nodeToPop;
    }

    // get the value of the top node
    peek() {
        if (this.top) return this.top.val;

        // when the top is NULL and you try to peek, throw an error
        throw 'NullReferenceException';
    }

    isEmpty() {
        return !this.top;
    }
}

module.exports = Stack;
