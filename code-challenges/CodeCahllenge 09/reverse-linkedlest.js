function Node(value) {
    this.value = value;
    this.next = null;
  }
  
  function LinkedList() {
    this._length = 0;
    this.head = null;
  }

function reverseLinkedlist(head) {
    let node = head,
        previous,
        temporary;
  
    while (node) {
    
      temporary = node.next;
  
      node.next = previous;
  
      previous = node;
      node = temporary;
    }
  
    return previous;
  }