'use strict';

const {searchFunction} = require('./array-binary-search.js');

describe("binarysearchvalid", function() {
    let arr = [4, 8, 15, 16, 23, 42]
 
   it("should return the index of an item in a sorted array", function() {
     expect(searchFunction(arr, 15)).toEqual(2);
   });
 });

 describe("binarysearchvainvalid", function() {
   let arr = [11,22,33,44,55,66,77]

  it("should return the index of an item in a sorted array", function() {
    expect(searchFunction(arr, 90)).toEqual(-1);
  });
});
