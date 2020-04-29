'use strict';

class Node {
  constructor(val) {
      this.val = val;
      this.next = null;
  }
}

class Stack {
  constructor() {
      this.top = null;
  }

  push(val) {
      let newNode = new Node(val);
      newNode.next = this.top;

      this.top = newNode;
  }

  pop() {
      if (!this.top) return null;

      let tempNode = this.top;

      this.top = tempNode.next;

      tempNode.next = null;

      return tempNode.val;
  }

  toString() {
      let str = '';

      let currentNode = this.top;

      while (currentNode) {
          str += currentNode.val + '\n';
          currentNode = currentNode.next;
      }

      str += 'null';
      return str;
  }
}

const multiBracketValidation = (str) => {
  let chars = str.split('');
  let bracketStack = new Stack();

  for (let i = 0; i < chars.length; i++) {
      if (chars[i] === '{' || chars[i] === '[' || chars[i] === '(') {
          // this is an opening bracket
          // should be "pushed" to stack
          bracketStack.push(chars[i]);
      } else if (chars[i] === '}' || chars[i] === ']' || chars[i] === ')') {
          let poppedVal = bracketStack.pop();

          if (chars[i] === '}' && poppedVal != '{') return false;
          if (chars[i] === ']' && poppedVal != '[') return false;
          if (chars[i] === ')' && poppedVal != '(') return false;
      }
  }

  
  if (bracketStack.top) return false;

  return true;
};

module.exports = multiBracketValidation;
// const multiBracketValidation = (str) => {
//   const arr = [];

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
//       arr.push(str[i]);
//     }
//     if ((str[i] === ')' && arr[arr.length - 1] === '(') 
//     || (str[i] === '}' && arr[arr.length - 1] === '{')
//     || (str[i] === ']' && arr[arr.length - 1] === '[')) {
//       arr.pop();
//     } else if ((str[i] === ')' && arr[arr.length - 1] !== '(') 
//     || (str[i] === '}' && arr[arr.length - 1] !== '{')
//     || (str[i] === ']' && arr[arr.length - 1] !== '[')) {
//       return false;
//     }
//   }
//   if (arr.length === 0) return true;
//   else return false;
// };

// module.exports = multiBracketValidation;