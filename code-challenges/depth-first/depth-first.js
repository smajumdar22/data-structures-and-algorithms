'use strict';

function depthFirstSearch(value) {
    const visited = [];
    const stack = [];

    for (let key in this) {

        if (!visited.includes(key)) {
            visited.push(key);
            stack.unshift(key);
        }
        while (stack.length) {
            let first = stack.pop();
            if (first === value) {
                return true;
            }
            this[key].forEach(child => {
                if (!visited.includes(child)) {
                    visited.push(child);
                    stack.push(child);
                }
            })
        }
    }
    return false;
};

module.exports = depthFirstSearch;