'use strict';
let HashTable = require('../hashtable');

describe('Test Hashtable', () => {
    it ('can adds a value to a hashtable', () => {
        let table = new HashTable(8);
        table.add('Test', 'Public');
        expect(table.contains('Test')).toBe(true);
    });
    it ('Can get a value stored', () => {
        let table = new HashTable(8);
        table.add('Test', 'Public');
        expect(table.get('Test')).toMatch('Public');
    });
    it ('can handle null value', () => {
        let table = new HashTable(8);
        table.add('Test', 'Public');
        expect(table.get('Test2')).toBeNull();
    });
    it ('Can handle a collision', () => {
        let table = new HashTable(5);
        table.add('Test', 'Public');
        table.add('Test2', 'Team');
        expect(table.storage[1][0][0]).toBe('Test');
        expect(table.storage[1][1][0]).toBe('Test2');
    });
    it ('Can get a value', () => {
        let table = new HashTable(8);
        table.add('Test', 'Public');
        table.add('Test2', 'Team');
        expect(table.get('Test')).toMatch('Public');
    });
    it ('Can get a value in range', () => {
        let table = new HashTable(5);
        expect(table.hash('Test')).toBe(1);
    });
});