'use strict';

const node = require('./node.js');
const dog = require('./dog.js');
const cat = require('./cat.js');

class AnimalShelter {
    constructor() {
        this.top = null;
        this.bottom = null;
    }

    enqueue(value) {
        if (value === undefined) {
            return -1;
        }
        if (value.constructor.name !== 'Dog') {
            if (value.constructor.name !== 'Cat') {
                return 'Dogs and Cats only';
            }

        }
    }
}
