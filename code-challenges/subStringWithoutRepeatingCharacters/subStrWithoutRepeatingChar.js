'use strict';
//Brute force

const longestSubstrWithoutRepeatingCharacters=(s)=>{

    let count =0;
    for (let i=0; i < s.length;i++){
        let val = s.char(i);
        let set = new Set([char]);
        for (let j=i+1; j< s.length; j++){
            val = s.char(j);
            if(set.has(val)){
                break;
            }else{
                set.add(val);
            }
            
            count = Math.max(count, set.size)
        }
    }
    return count;
}
let s = 'abcabcbb'
console.log(longestSubstrWithoutRepeatingCharacters(s));