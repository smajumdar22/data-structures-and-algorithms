'use strict';
const HashTable = require('../../hashtables/hashtable.js');
const leftJoin = require('../left-join.js');

describe('Left join test', () => {

    it('can join two hash tables', () => {
        const table1 = new HashTable(10);
        const table2 = new HashTable(10);

        table1.add('fond', 'enamored');
        table1.add('wrath', null);
        table1.add('diligent', 'employed');

        table2.add('cat', 'feline');
        table2.add('wrath', null);
        table2.add('parrot', 'bird');

        expect(leftJoin(table1, table2)).toEqual([
            [ 'wrath', null, null ],
            [ 'fond', 'enamored', null ],
            [ 'diligent', 'employed', null ],
        ]);
    });
});