 'use strict';

function swapElements(items, indexLeft, indexRight){
    let temp = items[indexLeft];
    items[indexLeft] = items[indexRight];
    items[indexRight] = temp;
}
function partition(items, left, right) {
    let valuePivot   = items[Math.floor((right + left) / 2)],
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < valuePivot) {
            i++;
        }
        while (items[j] > valuePivot) {
            j--;
        }
        if (i <= j) {
            swapElements(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}

module.exports=quickSort;