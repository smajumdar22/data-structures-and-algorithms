'use strict';

const reverseArray = (arr) => {

    let newArr = [];
    for (var i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
        newArr[i] = arr[j];
    }
    return newArr;
};