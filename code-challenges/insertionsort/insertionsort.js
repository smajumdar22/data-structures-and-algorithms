
const insertionSort = (arr) => {
// const arr = array.slice();
    for (let i = 1; i < arr.length; i++) {

        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                const temp = arr[j];
                arr[j] = arr[j-1];
                arr[j - 1] = temp;
            } else {
                break;
            }
        }
    }
    return arr;
}

// const insertionSort = (nums) => {
//     for (let i = 1; i < nums.length; i++) {
//       let j = i - 1
//       let tmp = nums[i]
//       while (j >= 0 && nums[j] > tmp) {
//         nums[j + 1] = nums[j]
//         j--
//       }
//       nums[j+1] = tmp
//     }
//     return nums
//  }

module.exports = insertionSort;