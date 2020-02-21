'use strict';

const validation = (str) => {
  const arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      arr.push(str[i]);
    }
    if ((str[i] === ')' && arr[arr.length - 1] === '(') 
    || (str[i] === '}' && arr[arr.length - 1] === '{')
    || (str[i] === ']' && arr[arr.length - 1] === '[')) {
      checker.pop();
    } else if ((str[i] === ')' && arr[arr.length - 1] !== '(') 
    || (str[i] === '}' && arr[arr.length - 1] !== '{')
    || (str[i] === ']' && arr[arr.length - 1] !== '[')) {
      return false;
    }
  }
  if (checker.length === 0) return true;
  return false;
};

module.exports = validation;