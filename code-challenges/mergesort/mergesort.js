'use strict';

function merge(leftArray, rightArray) {
    let result = [];
      while (leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
          result.push(leftArray[0]);
          leftArray = leftArray.slice(1)
       } else {
          result.push(rightArray[0]);
          rightArray = rightArray.slice(1)
         }
       }
      while (leftArray.length)
        result.push(leftArray.shift());
      while (rightArray.length)
        result.push(rightArray.shift());
      return result;
    }

    function mergesort(arr) {
      if (arr.length < 2) {
        return arr; }
      else {
        let midpoint = parseInt(arr.length / 2);
        let leftArray   = arr.slice(0, midpoint);
        let rightArray  = arr.slice(midpoint, arr.length);
        return merge(mergesort(leftArray), mergesort(rightArray));
      }
    }

    module.exports = mergesort;