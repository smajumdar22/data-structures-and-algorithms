'use strict';
const LinkedList = require('../../linked-list.js');
let test = new LinkedList();

describe ('tests our linked list implementation and methods', () => {
  beforeEach(() => {
    test = new LinkedList();
  })

  it ('will return NULL as head', () =>{
   
    expect(test.head).toEqual(null);
  });

  it ('will remove duplicates from an unsorted list', () =>{
    test.insert(2)
    test.insert(4)
    test.insert(1)
    test.insert(1)
    let head = test.head;
    test.remDuplicates(head);
    expect(test.head.value).toEqual(1);
    expect(test.head.next.value).toEqual(4);
    expect(test.head.next.next.value).toEqual(2);
    expect(test.head.next.next.next).toBe(null);
  });
  it ('will remove duplicates from a sorted list', () =>{
    test.insert(4)
    test.insert(2)
    test.insert(2)
    test.insert(1)
    let head = test.head;
    test.remDuplicates(head);
    expect(test.head.value).toEqual(1);
    expect(test.head.next.value).toEqual(2);
    expect(test.head.next.next.value).toEqual(4);
    expect(test.head.next.next.next).toBe(null);
  });
  it ('will remove duplicates from a single value linkedlist', () =>{
    test.insert(1)
    test.insert(1)
    let head = test.head;
    test.remDuplicates(head);
    expect(test.head.value).toEqual(1);
    expect(test.head.next).toBe(null);
  });

  it ('will return a single value linkedlist with no duplicates', () =>{
    test.insert(1)
    let head = test.head;
    test.remDuplicates(head);
    expect(test.head.value).toEqual(1);
    expect(test.head.next).toBe(null);
  });

  it ('will return a linkedlist with no duplicates', () =>{
    test.insert(0)
    test.insert(1)
    test.insert(2)
    test.insert(3)
    let head = test.head;
    test.remDuplicates(head);
    expect(test.head.value).toEqual(3);
    expect(test.head.next.value).toEqual(2);
    expect(test.head.next.next.value).toEqual(1);
    expect(test.head.next.next.next.value).toBe(0);
    expect(test.head.next.next.next.next).toBe(null);
  });

});