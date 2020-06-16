const quickSort = require('../quicksort.js');

/**
 * 
 [8,4,23,42,16,15]
 Reverse-sorted: [20,18,12,8,5,-2]
 Few uniques: [5,12,7,5,5,7]
 Nearly-sorted: [2,3,5,7,13,11]
 */

 describe('Can sort an array',function (){
     it('Can sort an array',function(){
    
        let arr =[8,4,23,42,16,15]
        let sortedArray = quickSort(arr, 0, arr.length - 1);
         expect(sortedArray).toEqual([4,8,15,16,23,42]);
     });

     it('Can sort a reverse sorted array',function(){
        let arr =[20,18,12,8,5,-2]
        let sortedArray = quickSort(arr, 0, arr.length - 1);
         expect(sortedArray).toEqual([-2,5,8,12,18,20]);
    });

    it('Can sort few uniques array',function(){
    
        let arr =[5,12,7,5,5,7]
        let sortedArray = quickSort(arr, 0, arr.length - 1);
         expect(sortedArray).toEqual([5,5,5,7,7,12]);
    });

    it('Can sort nearly sorted array',function(){
    
        let arr =[2,3,5,7,13,11]
        let sortedArray = quickSort(arr, 0, arr.length - 1);
         expect(sortedArray).toEqual([2,3,5,7,11,13]);
    });
 })