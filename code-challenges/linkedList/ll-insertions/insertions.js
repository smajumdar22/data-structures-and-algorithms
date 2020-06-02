

class Node {
  constructor(value){
    this.value = value
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }


  insert(element) {
    if (!this.head) {
      this.head = new Node(element);
    } else {
      let initialHead = this.head;
      this.head = new Node(element);
      this.head.next = initialHead;
    }
    return this.head
  }

  includes(index) {
    let current = this.head;
    //let count = 0;
    while (current) {
      if (current.value === index) {
        console.log(current.data);
        return true;
      }
      //count++;
      current = current.next;
    }
    return false;
  }

  toString (){
    let current = this.head;
    let llString = '';

    while (current){

      console.log(llString += `{${current.value}} ->`);
      current = current.next;
    }
    return llString + 'NULL';
  }

  // add to end of list
  append(element) {
    if (!this.head) {
      this.head = new Node(element)
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new Node(element)
    }
    this.size++
  }

  insertBefore(newVal, beforeVal){
    let previousCurrentNode = null;
    let currentNode = this.head;

    if(currentNode && currentNode.val === beforeVal){
      //we are looking for the head
      let newNode = new Node(newVal);
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    while(currentNode){
          if(currentNode.val === beforeVal){
            let newNode = new Node(newVal);
            previousCurrentNode.next = newNode;
            newNode.next = currentNode;
            return;
            //found my val
            //check val.next is same

          }

          previousCurrentNode = currentNode;
          currentNode = currentNode.next;
    }

    return false;

  }

//   insertBefore(value, newVal) {
//     if (value === undefined || newVal === undefined) {
//         throw Error('Invalid input');
//     }
//     let node = new Node(newVal);
//     let current = this.head;
//     while (current.next) {
//         if (this.head.data === value) {
//             node.next = this.head;
//             this.head = node;
//         } else if (current.next.data === value) {
//             node.next = current.next;
//             current.next = node;
//         } else {
//             current = current.next;
//         }
//     }
//     return this;
// }

insertAfter(newVal, afterVal){
  let currentNode = this.head;
  // if(currentNode.val === afterVal){
  //   let newNode = new Node(newVal);
  //   this.head.next = newNode;
  //   return;
  // }

  while(currentNode){
    if(currentNode.val === afterVal){
      let newNode = new Node(newVal);
      let nextCurrentNode = currentNode.next;
      currentNode.next = newNode;
      newNode.next = nextCurrentNode;

    }
    currentNode = currentNode.next;
  }

  return false;

}
// insertAfter(value, newValue) {
//     if (valuecurrentNode.next === undefined || newValue === undefined) {
//         throw Error('Invalid Input');
//     }
//     let node = new Node(newValue);
//     let current = this.head;
   
//     while (current.next) {
//         if (this.head.data === value) {
//             node.next = this.head.next;
//             this.head.next = node;
//         } else if (current.next.data === value) {
//             node.next = current.next.next;
//             current.next.next = node;
//         } else {
//             current = current.next;
//         }
//     }
//     return this;
// }

}

module.exports = LinkedList;




