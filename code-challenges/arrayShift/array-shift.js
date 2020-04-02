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

