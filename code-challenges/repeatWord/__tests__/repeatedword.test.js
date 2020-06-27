'use strict';

const repeatedWord = require('../repeated-word.js')

describe('Test repeated words in a String',() =>{
    it('can find repeated words',()=>{
        let tesStr = 'ab ac ab ad ad';

        expect(repeatedWord(tesStr)).toEqual('ab');
    })

    it('can test no repeated word',()=>{
        let tesStr = 'ab ac ad ae';

        expect(repeatedWord(tesStr)).toEqual(null);
    })

    
    it('can test similar words in caps',()=>{
        let tesStr = 'ab ac AB ac';

        expect(repeatedWord(tesStr)).toEqual('ab');
    })
    
    it('can find repeated words',()=>{
        let tesStr = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.....';

        expect(repeatedWord(tesStr)).toEqual('it');
    })
})