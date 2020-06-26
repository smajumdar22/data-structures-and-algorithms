'use strict';

function repeatedWord(str){

     str = str.toLowerCase();
     str = str.split(' ');
     let count =0;

  for(let i =0; i< str.length; i++){

      for(let j=i+1; j< str.length; j++) {

          if(str[i] === str[j]){

              count++;
              return str[j];
          }
      }
      
  }
  return 'None';
}

let str = "ab ac ab ac ad ad";
repeatedWord(str);

module.exports=repeatedWord;