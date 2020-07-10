'use strict';

function uniqueCharacter(str){
    str = str.toLowerCase();
    str = str.replace(/\s+/g, '');

    let hashtable = {};
    for(let i=0,len=str.length;i<len;i++){
        if (hashtable[str[i]] != null){
            hashtable[str[i]] = 1;
            return false;
        }else{
            hashtable[str[i]] = 0;
        }
    }
    return true;
}

module.exports = uniqueCharacter;