class Node {
    constructor(v){
        this.value = v;
        this.less = null;
        this.more = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    add(val) {

        let newNode = new Node(val);

        if (this.root === null) this.root = newNode;
        else {

            let current = this.root;

            while(current){
                if(current.value === val) break;
                if(val < current.value) {
                    if(current.less === null) current.less = newNode;
                    current = current.less;
                } else {
                    if(current.more === null) current.more = newNode;
                    current = current.more;
                }
            }
        }
        return this;
    }

    find(val) {
        let current = this.root;
        let found = false;

        while(current && !found) {

            if(current.value === val) found = true;
            else {
                if(val < current.value) current = current.less;
                else current = current.more;
            }
        }
        return current;
    }

    bfs() {
        let result = [];
        let q = [];
        let current = this.root;
        while(current) {
            result.push(current.value);
            if(current.less) q.push(current.less);
            if(current.more) q.push(current.more);
            current = q.shift();
        }
        return result;
    }

    dfsPreOrder(){
        let result = [];

        const traverse = node => {
            if(node === null) return;

            result.push(node.value);

            traverse(node.less);
            traverse(node.more);
        }

        traverse(this.root);
        return result
    }

    dfsPostOrder(){
        let result = [];

        const traverse = node => {
            if(node === null) return;

            traverse(node.less);
            traverse(node.more);

            result.push(node.value);
        }

        traverse(this.root);
        return result
    }

    dfsInOrder(){
        let result = [];

        const traverse = node => {
            if(node === null) return;

            traverse(node.less);
            result.push(node.value);
            traverse(node.more);

        }

        traverse(this.root);
        return result
    }
}




const validBST =  BST => {
    let valid = true;

    let q = [];
    let current = BST.root;

    while( current && valid) {
        // console.log(q)
        if(current.less) {
            if(current.less.value > current.value) valid = false;
            else q.push(current.less);
        }
        if(current.more) {
            if(current.more.value < current.value) valid = false;
            else q.push(current.more);
        }
        current = q.shift();
    }

    return valid;
}




let bst = new BinarySearchTree();
bst.add(35);
bst.add(10);
bst.add(50);
bst.add(16);
bst.add(5);
bst.add(27);
bst.add(48);

// bst.root.less.value = 50;
// console.log(bst.bfs()); // [35,10,50,5,16,48, 27]
// console.log(bst.dfsPreOrder()); // [35,10,5, 16, 27, 50, 48]
// console.log(bst.dfsPostOrder()); // [5,27, 16,10, 48, 50, 35]
// console.log(bst.dfsInOrder()); // [5,10,16,27,35, 48, 50]

console.log(validBST(bst));
// console.log(JSON.stringify(bst, null ,4));
// console.log(bst.find(50));
