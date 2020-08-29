'use strict';
//Brute force

// const longestSubstrWithoutRepeatingCharacters=(s)=>{

//     let count =0;
//     for (let i=0; i < s.length;i++){
//         let val = s.charAt(i);
//         let set = new Set([val]);
//         for (let j=i+1; j< s.length; j++){
//             val = s.char(j);
//             if(set.has(val)){
//                 break;
//             }else{
//                 set.add(val);
//             }

//         }
//         count = Math.max(count, set.size)
//     }
//     return count;
// }

const longestSubstrWithoutRepeatingCharacters = (s) => {
    let count = 0;
    let len = s.length;
    let start = 0;
    let end = 0;
    let set = new Set();
    while (start < len && end < len) {
        let char = s.charAt(end);
        if (!set.has(char)) {
            set.add(char);
            end++;
            count = Math.max(count, end - start)
        } else {

            set.delete(s.charAt(start));
            start++;
        }
    }
    return count;

}
let s = 'abcabcbb'
console.log(longestSubstrWithoutRepeatingCharacters(s));