'use strict';

const Queue = require('../queue.js');

describe('Queue operation',()=>{
    it('Can successfully enqueue multiple values into a queue',()=>{
        let myQueue = new Queue();
        myQueue.enqueue('red');
        myQueue.enqueue('White');

        expect(myQueue.isEmpty()).toBe(false);
        expect(myQueue.peek()).toBe('red');

    });

    it('Can successfully dequeue out of a queue the expected value',()=>{
        let myQueue = new Queue();
        myQueue.enqueue('red');
        myQueue.enqueue('white');
        myQueue.dequeue();
        expect(myQueue.peek()).toBe('white');

    });

    it('Can successfully peek into a queue, seeing the expected value',()=>{
        let myQueue = new Queue();
        myQueue.enqueue('red');
        expect(myQueue.peek()).toBe('red');

    });

    it('Can successfully empty a queue after multiple dequeues',()=>{
        let myQueue = new Queue();
        myQueue.enqueue('red');
        myQueue.enqueue('white');
        myQueue.dequeue();
        myQueue.dequeue();
        expect(myQueue.isEmpty()).toBe(false);

    });

    it('Can successfully instantiate an empty queue',()=>{
        let myQueue = new Queue();
        expect(myQueue.isEmpty()).toBe(true);

    });

    it('Calling dequeue or peek on empty queue raises exception',()=>{
        let myQueue = new Queue();
        expect(() => {
            myQueue.peek();
        }).toThrow();
        expect(() => {
            myQueue.dequeue();
        }).toThrow();

    });
});
