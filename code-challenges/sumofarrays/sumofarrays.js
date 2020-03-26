'use strict';

let summedArr =[];

const sumArr =(arr =>{
  for (let i=0;i<arr.length;i++){
     //console.log(arr[i])
     let sum = 0;
     for(let j=0;j<arr[i].length;j++){
      //console.log(arr[i][j]);
      sum += arr[i][j];  
     }
     summedArr.push(sum);
     //console.log(summedArr)
}
return summedArr;
});

module.exports= sumArr;