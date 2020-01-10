'use strict';

const reverseArray = (arr) => {

let newArr = [];
for (var i = 0, j = arr.length - 1; i < arr.length; i++, j--) {      
    newArr[i] = arr[j];
}   
return newArr;
};

//______________________________________________________________________

describe('Testing challenge 1', () => {
    test('It should reverse the array', () => {
      const arr = ["A", "B", "C", "D", "E", "F"];
      expect(reverseArray(arr)).toEqual( ["F", "E", "D", "C", "B", "A"]);
    });
  });