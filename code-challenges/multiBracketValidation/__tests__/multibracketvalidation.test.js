'use strict';

const multiBracketValidation = require('../multi-bracket-validation.js');

describe('multi bracket multiBracketValidation', () => {

  it('can validate each pair', () => {
    expect(multiBracketValidation('()')).toBe(true);
    expect(multiBracketValidation('[]')).toBe(true);
    expect(multiBracketValidation('{}')).toBe(true);
    expect(multiBracketValidation('((')).toBe(false);
    expect(multiBracketValidation('[[')).toBe(false);
    expect(multiBracketValidation('{{')).toBe(false);
  });
  it('check strings that should return true', () => {
    expect(multiBracketValidation('(){}[[]]')).toEqual(true);
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toEqual(true);
    expect(multiBracketValidation('()[[Extra Characters]]')).toEqual(true);
  });

  it('check strings that should return false', () => {
    expect(multiBracketValidation('[({}]')).toEqual(false);
    expect(multiBracketValidation('(](')).toEqual(false);
    expect(multiBracketValidation('{(})')).toEqual(false);
  });

  it('can validate single brackets', () => {
    expect(multiBracketValidation(']')).toBe(false);
    expect(multiBracketValidation('}')).toBe(false);
    expect(multiBracketValidation(')')).toBe(false);
  });
});