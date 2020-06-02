const BinaryTree = require ('./tree.js');

class BinarySearchTree extends BinaryTree {
    constructor(value){
        super(value);
    }

    add(val){
        if(val === undefined || !val || !this.root){
            return -1;
        };
     const root = this.root;
     if(val === root.value){
         return 'Need unique value';
     }

     if(val< root.value){
         if(!root.left){
             root.left = new BinarySearchTree(val);
         }else {
             root.left.add(val);
         }
     }

     if(val > root.value){
         if(!root.right){
             root.right = new BinarySearchTree(val);
         }else {
             root.right.add(val);
         }
     }

    }

    contains(val){
        const root = this.root;

        if(val === root.value){
           return true;
        }
        if(val < root.value){
            if(root.left){
                return root.left.contains(val);
            }
        }
        if(val > root.value){
            if(root.right){
                return root.right.contains(val);
            }
        }
        return false;
    }
}

module.exports = BinarySearchTree;