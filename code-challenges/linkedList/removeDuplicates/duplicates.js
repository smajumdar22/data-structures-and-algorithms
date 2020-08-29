class Node {
    constructor(value){
      this.value = value
      this.next = null;
  
    }
  }
function remDuplicates(head) {

    if(!head) return ;
    const set = new Set();
    const hash = {};
    hash.next = head;
    let prev = hash;
    let curr = head;
    while (curr) {
        if (set.has(curr.value)) {
            prev.next = curr.next;
        } else {
            prev = curr;
            set.add(curr.value);
        }
        curr = curr.next;
    }
    return hash.next;
}

// Input -1 2 4 2
//Output - 1 2 4
let ll = new Node(1);
ll.next = new Node(2);
ll.next.next = new Node(4);
ll.next.next.next = new Node(2);

//console.log(remDuplicates(ll)); //1 2 4

// Input - 1 1
//Output - 1
let test = new Node(1);
test.next = new Node(1);

//console.log(remDuplicates(test)); //1 

// Input - Null
//Output - Undefined
let test2 = new Node();
//console.log(remDuplicates(test2)); //Undefined

// Input - 1
//Output - 1
let test3 = new Node(1);
//console.log(remDuplicates(test3)); //1

module.exports=remDuplicates;
