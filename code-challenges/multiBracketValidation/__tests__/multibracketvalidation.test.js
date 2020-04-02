'use strict';

const validation = require('../multi-bracket-validation.js');

describe('multi bracket validation', () => {
  it('check strings that should return true', () => {
    expect(validation('(){}[[]]')).toEqual(true);
    expect(validation('{}{Code}[Fellows](())')).toEqual(true);
    expect(validation('()[[Extra Characters]]')).toEqual(true);
  });

  it('check strings that should return false', () => {
    expect(validation('[({}]')).toEqual(false);
    expect(validation('(](')).toEqual(false);
    expect(validation('{(})')).toEqual(false);
  });
});