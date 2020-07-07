'use strict';

const hashTable = require('../hashtables/hashtable.js');

function leftJoin(hash1, hash2) {
  
    const leftJoinedTable = [];

  
    if (!hash1 || !hash2 || hash1.storage.length === 0 || hash2.storage.length === 0) {
        return false;
    }
    
    let left = hash1.storage.filter(item => item !== undefined);

    for (let i = 0; i < left.length; i++) {
        if (left[i].length === 1) {
            let index = left[i][0];
            leftJoinedTable.push(index);
            if (hash2.contains(index[0])) {
                let match = hash2.get(index[0]);
                leftJoinedTable[leftJoinedTable.indexOf(index)].push(match);
            } else {
                leftJoinedTable[leftJoinedTable.indexOf(index)].push(null);
            }
        } else {
            for (let j in left[i]) {
                let index = left[i][j];
                leftJoinedTable.push(index);
                if (hash2.contains(index[0])) {
                    leftJoinedTable[leftJoinedTable.indexOf(index)].push(hash2.get(index[0]));
                } else {
                    leftJoinedTable[leftJoinedTable.indexOf(index)].push(null);
                }
            }
        }
    }
    return leftJoinedTable;
}

module.exports = leftJoin;