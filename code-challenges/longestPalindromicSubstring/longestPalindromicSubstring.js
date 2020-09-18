/*
// Brute Force
function palindromeCheck(s){
    let isPalindrome = true;
    let k=0;
    let l = s.length -1;
    while (k<=l){
      if(!(s.charAt(k) === s.charAt(l))){
         isPalindrome = false;
         break;
      }
    k++;
    l--;
    }
    return isPalindrome;
 }
 
 function test(s){
   let max ='';
 
   for(let i=0; i< s.length -1 ; i++){
     for (let j=i; j < s.length; j++){
       let substr = s.substring(i,j);
       if(palindromeCheck(substr)){
         if(substr.length > max.length){
             max = substr;
         }
       }
 
     }
   }
   return max;
 }
 */

var maxPalindrome = function(s) {
  if(s.length < 1 || s === null) return '';
  let max = '';
  for (let i =0; i< s.length; i++){
    let oddPal = expandFromCenter(s, i, i);
    let evenPal = expandFromCenter(s, i-1, i);

    if(oddPal.length > max.length){
      max = oddPal;
    }
    if(evenPal.length > max.length){
      max = evenPal;
    }

  }
  return max;
}

function expandFromCenter(s, left , right){
  let i=0;
  while(s[left-i] && s[left-i] === s[right+i]){
    i++;
  }
  i--;
  return s.slice(left - i, right + i + 1);
}

console.log(maxPalindrome('babad'));