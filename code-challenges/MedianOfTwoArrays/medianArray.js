'use strict';
const findMedianSortedArrays = (nums1, nums2) => {

    let newArr = nums1.concat(nums2);
    newArr = newArr.sort(function (a, b) { return a - b });
    let len = newArr.length;
    // Number of elements in an array is odd
    if (len % 2 == 1) {
        return newArr[(len / 2) - .5]
    } else {
        // Number of elements in an array is even
        return (newArr[len / 2] + newArr[len / 2 - 1]) / 2
    }
}

module.exports = findMedianSortedArrays;