'use strict';

const repeatedWord = require('../repeated-word.js')

describe('Test repeated words in a String',() =>{
    it('can find repeated words',()=>{
        let tesStr = 'ab ac ab ad ad';

        expect(repeatedWord(tesStr)).toEqual('ab');
    })

    it('can test no repeated word',()=>{
        let tesStr = 'ab ac ad ae';

        expect(repeatedWord(tesStr)).toEqual('None');
    })

    
    it('can test similar words in caps',()=>{
        let tesStr = 'ab ac AB ac';

        expect(repeatedWord(tesStr)).toEqual('ab');
    })
    
    it('can find repeated words',()=>{
        let tesStr = 'ab ac ad ac ba';

        expect(repeatedWord(tesStr)).toEqual('ac');
    })
})