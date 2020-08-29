'use strict';

// const insertShiftArray = (arr, num) => {
// let outsider = arr.length % 2 === 0 ? arr.length : Math.round(arr.length / 2);
// for (let i = outsider;i< arr.length; i++){

//     let insider = arr[i];
//     arr[i] = outsider;
//     outsider = insider;

// }
// arr.push(outsider);
// return arr;
// };

//insert element in the middle of the array
function insertShiftArray(arr,element) { 
    // shift all elements one 
    // place to the back until index 
    let mid = Math.floor((arr.length)/2);
    for (i = arr.length; i > mid; i--) { 
        arr[i] = arr[i - 1]; 
    } 
    // insert the element at the index 
    arr[mid] = element; 

  return arr;
} 
let arr =[1,2,3,4,5,6,7];
// let mid = Math.floor((arr.length)/2);
// arr.splice(mid,0,88);
// console.log(arr);\

console.log(insertElement(arr,67));