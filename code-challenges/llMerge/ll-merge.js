'use strict';

function Node(value) {
    this.value = value;
    this.next = null;
  }
  
  function LinkedList() {
    this._length = 0;
    this.head = null;
  }
  
  LinkedList.prototype.add = function(value) {
    let node = new Node(value);
    let currentNode = this.head;
  
    if (!currentNode) this.head = node;
    else {
      while (currentNode.next) currentNode = currentNode.next;
    }
  
    currentNode.next = node;
    this._length++;
    return node;
  };
  
