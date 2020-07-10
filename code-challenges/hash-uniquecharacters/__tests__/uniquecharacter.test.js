'use strict';

const uniqueCharacter = require('../uniquecharacters.js');

describe('Test unique characters',()=>{
    it('can test unique characters',()=>{
        let test1 ='The quick brown fox jumps over the lazy dog';
        let test2 = 'I love cats';
        let test3 ='Donald the duck';

        expect(uniqueCharacter(test1)).toBe(false);
        expect(uniqueCharacter(test2)).toBe(true);
        expect(uniqueCharacter(test3)).toBe(false);

    })
})