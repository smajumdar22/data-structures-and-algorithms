'use strict';

const arrayshift = require('../array-shift.js');
describe('Arrayshift even', () => {
    test('It add the element to the middle of an even array', () => {
      let arr = [2,4,6,8];
      let element = 5;
      expect(arr.arrayshift(arr,element)).toEqual( [2,4,5,6,8]);
    });
  });

  describe('Arrayshift odd', () => {
    test('It add the element to the middle of an even array', () => {
      let arr = [4,8,15,23,42];
      let element = 16;
      expect(arr.arrayshift(arr,element)).toEqual( [4,8,15,16,23,42]);
    });
  });

  describe('Arrayshift failure', () => {
    test('It add the element to the middle of an even array', () => {
      let notArr = 3;
      let element = 16;
      expect(arr.arrayshift(notArr,element)).toThrow(err);
    });
  });

