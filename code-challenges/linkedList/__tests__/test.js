const LinkedList = require ('../linked-list.js');
let test = new LinkedList();

describe ('tests our linked list implementation and methods', () => {
  beforeEach(() => {
    test = new LinkedList();
  })

  it ('will return true if a searched value exists in a linked list', () =>{
    test.append(9)
    test.append(11)
    test.append(3)
    test.append(12)
    test.includes(3)
    expect(test.includes(3)).toBe(true)
  })

})