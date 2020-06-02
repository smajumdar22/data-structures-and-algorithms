'use strict';

const AnimalShelter = require('../fifo-animal-shelter.js');
let shelter = new AnimalShelter();
const Dog = require('../dog.js');
const Cat = require('../cat.js');

describe('Animal Shelter', () => {
    it('Can enqueue a Dog', () => {
        shelter.enqueue(new Dog('Buffer'));
        expect(shelter.front.data.constructor.name).toBe('Dog');
    });
    it('Can enqueue a Cat', () => {
        shelter.enqueue(new Cat('Sili'));
        expect(shelter.rear.data.constructor.name).toBe('Cat');
    });
    it('Can dequeue a Dog', () => {
        expect(shelter.dequeue('dog').name).toBe('Buffer');
    });
    it('Can dequeue a Cat', () => {
        shelter.enqueue(new Cat('Essy'));
        expect(shelter.dequeue('cat').name).toBe('Sili');
    });
    it('Can dequeue with no parameters', () => {
        let front = shelter.front.data;
        expect(shelter.dequeue().name).toBe(front.name);
    });
    it('Not cat or dog', () => {
        expect(shelter.dequeue('')).toBe(-1);
    });
    });