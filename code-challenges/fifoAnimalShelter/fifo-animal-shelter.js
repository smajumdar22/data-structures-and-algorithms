const Node = require('./node.js');

class AnimalShelter {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(value) {
        if (value === undefined) {
            console.error('Must pass in a value');
            return -1;
        }
        if (value.constructor.name !== 'Dog') {
            if (value.constructor.name !== 'Cat') {
                return 'Only for cats and dogs';
            }
        }
        let node = new Node(value);
        if (!this.front) {
            this.front = node;
            this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
        return this;
    }

    dequeue(pref) {
        if (!this.front) {
            console.log('Empty');
            return -1;
        }
        if (!pref || this.front.data.constructor.name.toLowerCase() === pref) {
            let temp = this.front;
            this.front = this.front.next;
            temp.next = null;
            return temp.data;
        } else {
            let current = this.front.next;
            let previous = this.front;

            while (current.next) {
                if (current.data.constructor.name.toLowerCase() === pref) {
                    let temp = current;
                    previous.next = current.next;
                    temp.next = null;
                    temp.data.print();
                    return this;
                } else {
                    previous = current;
                    current = current.next;
                }
                if (current.data.constructor.name.toLowerCase() === pref) {
                    let temp = current;
                    previous.next = current.next;
                    this.rear = previous;
                    temp.next = null;
                    temp.data.print();
                    return this;
                }
                return 'Empty queue';
            }
        }
    }
}

module.exports = AnimalShelter;