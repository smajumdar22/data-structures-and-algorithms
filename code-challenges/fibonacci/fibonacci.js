let fibonacci =(num)=>{

    let a=1,b=0,temp;
    while (num >=0){
        temp =a;
        a=a+b;
        b=temp;
        num--;
    }
    return b;
}

/* ------------------------------------------------------------------------------------------------
TESTS
------------------------------------------------------------------------------------------------ */

describe("fibonacci", function() {
 
   it("should return the the sum of num", function() {
     expect(fibonacci(4)).to.equal(5);
   });
 });
