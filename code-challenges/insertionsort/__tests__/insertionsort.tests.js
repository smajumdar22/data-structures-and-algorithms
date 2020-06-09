const insertionSort = require('../insertionsort.js');

/**
 * 
 [8,4,23,42,16,15]
 Reverse-sorted: [20,18,12,8,5,-2]
 Few uniques: [5,12,7,5,5,7]
 Nearly-sorted: [2,3,5,7,13,11]
 */

 describe('Can sort an array',function (){
     it('Can sort an array',function(){
    
         expect(insertionSort([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42]);
     });

     it('Can sort a reverse sorted array',function(){
    
        expect(insertionSort([20,18,12,8,5,-2])).toEqual([-2,5,8,12,18,20]);
    });

    it('Can sort few uniques array',function(){
    
        expect(insertionSort([5,12,7,5,5,7])).toEqual([5,5,5,7,7,12]);
    });

    it('Can sort nearly sorted array',function(){
    
        expect(insertionSort([2,3,5,7,13,11])).toEqual([2,3,5,7,11,13]);
    });
 })