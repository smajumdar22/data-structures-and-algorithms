// function reverseStack (stack){

//     let top = stack.peek();

//     if(stack.isEmpty()){
//         return 'Invalid';
//     }

//     let reverse = [];
//     while(!stack.isEmpty()){
//     //while(stack.peek()){
//         //reverse.push(stack.pop());
//         reverse.push(stack.pop());
//     }
//     return reverse;
// }

let reverseStack=(stack)=> {
    if(!stack.isEmpty()){
        let temp = stack.pop();
        reverseStack(stack);

        insertAtBottom(temp, stack);
    }
}

let insertAtBottom=(temp, stack)=>{
    if(stack.isEmpty()){
        stack.push(temp);
    }else {
        let x = stack.pop();
        insertAtBottom(temp, stack);
        stack.push(x);
    }
}

module.exports= reverseStack;