'use strict';

const searchFunction = (arr, value) => {

  let start = 0;
  let end = arr.length -1;
  let mid = 0;


  while (start <= end) {
     mid = Math.floor((end + start) / 2);

    //mid == value being searched
    if (arr[mid] === value) {

      return mid;

    }else if (value > arr[mid]) {
      //move start up one
      start = mid + 1;
    }else {
      //move end by one
      end = mid - 1;
    }
  }

  return -1;
};


module.exports = {searchFunction};