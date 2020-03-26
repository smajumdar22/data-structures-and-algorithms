'use strict';

const sumArr = require('./sumofarrays.js');

const array1 = [ [1, 2, 3], [3, 5, 7], [1, 7, 10] ];
const expectedArray1 = [6, 15, 18];
const array2 = [ [0, 1, 5], [-4, 7, 2], [-3, 12, 11] ];
const expectedArray2 = [6, 5, 20];

describe ('sum of arrays', function (){
    it('sum of positive numbers', function (){

        expect(sumArr(array1)).toEqual(expectedArray1);
    });
    it('sum of positive and negative numbers', function (){
       expect(sumArr(array2)).toEqual(expectedArray2);
    });

});
