'use strict';

const LLKthFromEnd = require('../ll-kth-from-end.js');
const LinkedList =  require('../../linked-list.js');
let test = new LLKthFromEnd();
let create = new LinkedList();


describe ('tests our linked list implementation and methods', () => {
    // beforeEach(() => {
    //   let test = new LinkedList();
    // });
    it ('will append the linked list', () =>{
      test.insert(9);
      test.insert(11);
      test.insert(3);
      test.insert(12);

       
        expect(test.llKthFromEnd(0)).toEqual(9);
        expect(test.llKthFromEnd(1)).toEqual(11);
        expect(test.llKthFromEnd(2)).toEqual(3);
        expect(test.llKthFromEnd(3)).toEqual(12);
        
  
    });
    
  });