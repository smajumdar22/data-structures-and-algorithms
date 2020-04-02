'use strict';

const Node = require('./node.js');

module. exports = class Stack {
    constructor(){
        this.top = null;
    }

    push(value){
        if(value === undefined){
            return -1;
        }
            let node = new Node(value);

        if(!this.top) {
            this.top = node;
        }else{
            node.next = this.top;
            this.top = node;
        }
        
    }

    pop(){
        if(!this.top === null){
             return -1;
        }

        let temp = this.top;
        this.top = temp.next;
        temp.next = null;
        return temp.data
    }

    peek(){
        if(!this.top){
            return -1;
        }
        else{
            return this.top.data;
        }
    }

    }
