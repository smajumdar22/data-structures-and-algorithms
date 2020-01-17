'use strict';

const insertShiftArray = (arr, num) => {
let outsider = arr.length % 2 === 0 ? arr.length : Math.round(arr.length / 2);
for (let i = outsider;i< arr.length; i++){

    let insider = arr[i];
    arr[i] = outsider;
    outsider = insider;

}
arr.push(outsider);
return arr;
};

//____________________________________________________________________________

describe('Testing challenge 1', () => {
    test('It should reverse the array', () => {
      let arr = [2,4,6,8,10];
      expect(arr.splice(3,1,7)).toEqual( [2,4,6,7,8,10]);
    });
  });