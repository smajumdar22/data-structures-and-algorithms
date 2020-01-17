'use strict';

let searchFunction = (arr, x) => { 
   
    let start=0, end=arr.length-1; 
          
   
    while (start<=end){ 
  
        
        let mid=Math.floor((start + end)/2); 
        if (arr[mid]===x) return mid; 
  
        else if (arr[mid] < x)  {
            start = mid + 1; 
             return start;
         }
             
        else{
            end = mid - 1; 
            return end;
            
        }
    } 
   
    return -1; 
} 

/* ------------------------------------------------------------------------------------------------
TESTS
------------------------------------------------------------------------------------------------ */

describe("binarysearchvalid", function() {
     var arr = [4, 8, 15, 16, 23, 42]
  
    it("should return the index of an item in a sorted array", function() {
      expect(searchFunction(arr, 15)).to.equal(4);
    });
  });

  describe("binarysearchvainvalid", function() {
    var arr = [11,22,33,44,55,66,77]
 
   it("should return the index of an item in a sorted array", function() {
     expect(searchFunction(arr, 90)).to.equal(-1);
   });
 });
