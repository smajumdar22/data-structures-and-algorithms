'use strict';

const arrreverse = require('../array-reverse.js')

describe('Testing challenge 1 ', () => {
    test('It should reverse the array', () => {
        const arr = ['A', 'B', 'C', 'D', 'E', 'F'];
        expect(arrreverse(arr)).toEqual(['F', 'E', 'D', 'C', 'B', 'A']);
    });
});