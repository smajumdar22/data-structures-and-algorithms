'use strict';
const LinkedList = require ('../insertions.js');
let test = new LinkedList();

describe ('tests our linked list implementation and methods', () => {
  beforeEach(() => {
    test = new LinkedList();
  })
  it ('will return NULL as head', () =>{
   
    expect(test.head).toEqual(null);
  });
  it ('will append the linked list', () =>{
    test.insert(9)
    test.insert(11)
    test.insert(3)
    test.append(12)

    expect(test.toString()).toBe('{3} ->{11} ->{9} ->{12} ->NULL');

  });

  it ('will print the linked list', () =>{
    test.insert(9)
    test.insert(11)
    test.insert(3)
    test.insert(12)
    expect(test.toString()).toBe('{12} ->{3} ->{11} ->{9} ->NULL');
  });


  it ('will insert after the linked list', () =>{
    test.insert(11)

    test.insert(3)
    test.insert(12)
    test.insertAfter(11,9)
    expect(test.toString()).toBe('{12} ->{3} ->{11} ->{9} ->NULL');
  });

  it ('will insert before the linked list', () =>{
    test.insert(11)

    test.insert(3)
    test.insert(12)
    test.insertBefore(11,9)
    expect(test.toString()).toBe('{12} ->{3} ->{9} ->{11} ->NULL');
  });

  
  it ('will return true if a searched value exists in a linked list', () =>{
    test.append(9)
    test.append(11)
    test.append(3)
    test.append(12)
    test.includes(3)
    expect(test.includes(3)).toBe(true);
  });

  it ('will return false if a searched value exists in a linked list', () =>{
    test.append(9)
    test.append(11)
    test.append(3)
    test.append(12)
    test.includes(3)
    expect(test.includes(4)).toBe(false);
  });

  it ('will print the linked list', () =>{
    test.insert(9)
    test.insert(11)
    test.insert(3)
    test.insert(12)
    expect(test.toString()).toBe('{12} ->{3} ->{11} ->{9} ->NULL');
  });

  it ('will insert the linked list', () =>{
    test.insert(9)
    test.insert(11)
    test.insert(3)
    test.insert(12)
    expect(test.head.value).toEqual(12);
  });

  it ('will append the linked list', () =>{
    test.insert(9)
    test.insert(11)
    test.insert(3)
    test.append(12)
    expect(test.head.value).toEqual(3);
  });

  it ('will return NULL as head', () =>{
   
    expect(test.head).toEqual(null);
  });

  it ('will append the linked list', () =>{
    test.insert(9)
    test.insert(11)
    test.insert(3)
    test.insert(12)
    expect(test.head.next.value).toEqual(3);
  });

});