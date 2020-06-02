'use strict';

module.exports = class Cat {
    constructor(name) {
        this.name = name;
        this.print = function() {
            return `${name} = cat`;
        };
    }
}