'use strict';

const reverseArray = (arr) => {

    let newArr = [];
    for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
        newArr[i] = arr[j];
    }
    return newArr;
};

module.exports = reverseArray;

//Solution 2

// function arrayReverse(arr){
//     let resArr =[];
//     if (arr.length === 0) return arr;
//      for(let i=arr.length -1; i>=0; i--){
//        resArr.push(arr[i])
//      }
//      return resArr;
//     };
    
//     let test =[1,2,3,4,5,6,7]
//     console.log(arrayReverse(test))