'use strict';

module.exports = class Dog {
    constructor(name) {
        this.name = name;
        this.print = function() {
            return `${name} = dog`;
        };
    }
}