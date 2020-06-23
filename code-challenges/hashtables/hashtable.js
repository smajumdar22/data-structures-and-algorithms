class HashTable {
    constructor(maxValue) {
        this.maxValue = maxValue;
        this.storage = [];
    }
  
    hash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash += str.charCodeAt(i);
        }
        return hash % this.maxValue;
    }
  
    add(key, value) {
        let index = this.hash(key);
        if (this.storage[index] === undefined) {
            this.storage[index] = [[key, value]];
        } else {
          
            let inserted = false;
            for (var i = 0; i < this.storage[index].length; i++) {
            
                if (this.storage[index][i] && this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                this.storage[index].push([key, value]);
            }
        }
    }

  

    get(key) {
        let index = this.hash(key);
        if (this.storage[index] === undefined) {
            return null;
        }
        for (let i = 0; i < this.storage[index].length; i++) {
            if (this.storage[index][i] && this.storage[index][i][0] === key) {
                return this.storage[index][i][1];
            } 
        }
        return null;
    }
  
    contains(key) {
        let index = this.hash(key);
        if (this.storage[index] === undefined) {
            return false;
        }
        for (let i = 0; i < this.storage[index].length; i++) {
            if (this.storage[index][i] && this.storage[index][i][0] === key) {
                return true;
            } 
        }
        return false;
    }

    print() {
        return this.storage;
    }
    
}
  

module.exports = HashTable;
  