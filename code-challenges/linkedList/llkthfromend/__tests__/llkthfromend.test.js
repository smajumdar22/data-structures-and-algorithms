'use strict';

const LinkedList = require('../ll-kth-from-end.js');

const error = 'Invalid';
describe('tests our linked list implementation and methods', () => {

  let test = new LinkedList();

  test.insert(9);
  test.insert(11);
  test.insert(3);
  test.insert(12);
  it('verify node is found', () => {

    expect(test.llKthFromEnd(0)).toEqual(9);
    expect(test.llKthFromEnd(1)).toEqual(11);
    expect(test.llKthFromEnd(2)).toEqual(3);
    expect(test.llKthFromEnd(3)).toEqual(12);

  });

  it('verify node is not found', () => {

  
    expect(test.llKthFromEnd(5)).toEqual(error);

  });

});