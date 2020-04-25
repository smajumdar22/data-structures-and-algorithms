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

// 'use strict';

// const animals = require('./animals.js');

// // animals.Dog
// // animals.Cat

// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class AnimalShelter {
//     constructor() {
//         this.front = null;
//         this.rear = null;
//     }

//     enqueue(animal) {
//         // edge case: queue is empty

//         let newNode = new Node(animal);

//         if (!this.front && !this.rear) {
//             this.front = newNode;
//             this.rear = newNode;
//             return;
//         }

//         this.rear.next = newNode;
//         this.rear = newNode;
//     }

//     dequeue(pref) {
//         // based on pref, dequeue
//         // some traversal in place O(n)

//         // start at the front, move to .next until we get pref, else return null

//         if (!(pref === 'dog' || pref === 'cat')) return null;

//         let currentNode = this.front;
//         let prevNode = null;

//         while (currentNode) {
//             let animal = currentNode.val;

//             if (animal.species === pref) {
//                 if (!prevNode) {
//                     this.front = currentNode.next;
//                     currentNode.next = null;
//                     return currentNode;
//                 }

//                 prevNode.next = currentNode.next;

//                 if (!currentNode.next) this.rear = prevNode;

//                 currentNode.next = null;
//                 return currentNode;
//             }

//             prevNode = currentNode;
//             currentNode = currentNode.next;
//         }

//         return null;
//     }

//     toString() {
//         let currentNode = this.front;
//         let str = '';

//         while (currentNode) {
//             str +=
//                 '[ name: ' +
//                 currentNode.val.name +
//                 ', species: ' +
//                 currentNode.val.species +
//                 '] -> ';

//             currentNode = currentNode.next;
//         }

//         str += 'null';
//         return str;
//     }

//     toStringFrontRear() {
//         let frontStr = 'null';
//         let rearStr = 'null';

//         if (this.front)
//             frontStr =
//                 '[ name: ' +
//                 this.front.val.name +
//                 ', species: ' +
//                 this.front.val.species +
//                 ']';

//         if (this.rear)
//             rearStr =
//                 '[ name: ' +
//                 this.rear.val.name +
//                 ', species: ' +
//                 this.rear.val.species +
//                 ']';

//         let str = 'front: ' + frontStr + ', rear: ' + rearStr;

//         return str;
//     }
// }

// let shelter = new AnimalShelter();

// let fido = new animals.Dog('fido');
// shelter.enqueue(fido);

// let fifo = new animals.Dog('fifo');
// shelter.enqueue(fifo);

// let rex = new animals.Dog('rex');
// shelter.enqueue(rex);

// //console.log(shelter.toString());

// let felix = new animals.Cat('felix');
// shelter.enqueue(felix);

// let rover = new animals.Dog('rover');
// shelter.enqueue(rover);

// console.log(shelter.toString());

// console.log(shelter.dequeue('cat'));
// console.log(shelter.toString());
// console.log(shelter.toStringFrontRear());