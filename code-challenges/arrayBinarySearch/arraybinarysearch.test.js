'use strict';

const {searchFunction} = require('./array-binary-search.js');

describe("binarysearchvalid", function() {
    let arr = [4, 8, 15, 16, 23, 42]
   it("should return the index of an item in a sorted array", function() {
     expect(searchFunction(arr, 15)).toEqual(2);
   });
 });

 describe("binarysearchvalid", function() {
  let arr = [4, 8, 15, 16, 23, 42,11]
 it("should return the index of a mid item in a sorted array", function() {
   expect(searchFunction(arr, 16)).toEqual(3);
 });
});

describe("binarysearchvalid", function() {
  let arr = [4, 8, 15, 16, 23, 42,11]
 it("should return the index of an item less than mid item in a sorted array", function() {
   expect(searchFunction(arr, 8)).toEqual(1);
 });
});

describe("binarysearchvalid", function() {
  let arr = [4, 8, 15, 16, 23, 42,11]
 it("should return the index of an item more than mid item in a sorted array", function() {
   expect(searchFunction(arr, 42)).toEqual(5);
 });
});

describe("binarysearchvalid", function() {
  let arr = [4, 8, 15, 16, 23, 42,11]
 it("should return the index of an mid item in a sorted array", function() {
   expect(searchFunction(arr, 16)).toEqual(3);
 });
});


 describe("binarysearchvainvalid", function() {
   let arr = [11,22,33,44,55,66,77]
  it("should return the index of an item in a sorted array", function() {
    expect(searchFunction(arr, 90)).toEqual(-1);
  });
});
