const LinkedList = require ('../linked-list.js');
let test = new LinkedList();

describe ('tests our linked list implementation and methods', () => {
  beforeEach(() => {
    test = new LinkedList();
  })


  it ('will return true if a searched value exists in a linked list', () =>{
    test.append(4)
    test.append(6)
    test.append(7)
    test.append(8)
    test.includes(9)
    expect(test.firstOdd()).toBe(7);
  });

  it ('will return true if a searched value exists in a linked list', () =>{
    test.append(1)
    test.append(6)
    test.append(7)
    test.append(8)
    test.includes(9)
    expect(test.firstOdd()).toBe(1);
  });

  it ('will return true if a searched value exists in a linked list', () =>{
    test.insert(2)
    test.insert(2)
    test.insert(4)
    test.insert(4)
    test.insert(5)
    expect(test.firstOdd()).toBe(5);
  });

});