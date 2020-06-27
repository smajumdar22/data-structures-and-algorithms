'use strict';

// function repeatedWord(str){

//      str = str.toLowerCase();
//      str = str.split(' ');
//      let count =0;

//   for(let i =0; i< str.length; i++){

//       for(let j=i+1; j< str.length; j++) {

//           if(str[i] === str[j]){

//               count++;
//               return str[j];
//           }
//       }
      
//   }
//   return 'None';
// }

function hash(key, size) {
    let sum = 0;
    for (let i in key) sum += key.charCodeAt(i);

    sum *= 599;

    return sum % size;
}

function repeatedWord(str) {
    let words = str.split(/[., -!?]/g);
    let hashmap = new Array(words.length * 5);

    for (let i = 0; i < words.length; i++) {
        if (words[i] === '') continue;
        let indx = hash(words[i].toLowerCase(), hashmap.length);
       

        // possible collision
        if (hashmap[indx]) {
          
            // collision is actually same key/value
            let item = hashmap[indx];
           
            while (item) {
                if (item.key === words[i].toLowerCase()) return item.key;
                item = item.next;
            }

            // collision is correct collision

            hashmap[indx] = {
                key: words[i].toLowerCase(),
                next: hashmap[indx],
            };
        }

        // no collision
        else {
            hashmap[indx] = { key: words[i].toLowerCase() };
        }
    }

    return null;
}



let str = "ab ac ab ac ad ad";
repeatedWord(str);

module.exports=repeatedWord;