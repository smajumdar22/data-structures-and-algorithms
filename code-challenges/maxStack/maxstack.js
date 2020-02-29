'use strict';

function MaxStack(){
    this.stack=[];
}

MaxStack.push =(value)=>{
    let top = this._top();
    let entry;
    if(!top){
     entry=   {
            value : value,
            max: value
        }
    }else {
        entry = {
            value: value,
            max : value > top.max ? value : top.max
        }
    }
    this.stack.push(entry);
}

MaxStack.pop = () => {
    if(this.stack.length === 0){
        return undefined;
    }
    return this.stack.pop().value;
}


MaxStack.max =() => {
    if(this.stack.length === 0){
        return undefined;
    }
    return this._top.max;
}

module.exports = MaxStack;