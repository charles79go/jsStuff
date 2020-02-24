class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    add(val) {

        let newNode = new Node(val);
        if(!this.root) this.root = newNode;
        else {

            let current = this.root;
            let q = [];
            let placed = false;

            while(current && !placed) {
                if(!current.left) {
                    current.left = newNode;
                    placed = true;
                } else {

                    if(!current.right) {
                        current.right = newNode;
                        placed = true;
                    } else {
                        q.push(current.left);
                        q.push(current.right);
                    }
                }
                current = q.shift();
            }
        }
    }
}


const checkTreeForMaxBST = tree => {

    let q = [];
    let largestBSTNodeCount = 0;
    largestNode = null;
    current = tree.root;

    const checkBST = node => {
        let localQ = [];
        let current = node;
        let refNode = node;
        let count = 1;
        let valid;

        while(current) {
            valid = true;
            if(current.left && current.left.value > current.value) valid = false;
            if(current.right && current.right.value < current.value) valid = false;

            if(valid) {
                if(current.left) {
                    localQ.push(current.left);
                    count += 1;
                }
                if(current.right) {
                    localQ.push(current.right);
                    count += 1;
                }
            }
            current = localQ.shift();
        }
        if(count > largestBSTNodeCount ) {
            largestBSTNodeCount = count;
            largestNode = refNode;
        }
    }


    if(current) largestBSTNodeCount = 1;

    while(current) {
        if(current.left) q.push(current.left);
        if(current.right) q.push(current.right);
        checkBST(current);
        current = q.shift();
    }

    let result = {
        largestBSTNodeCount,
        largestNode
    };

    return result;
}


let tree = new Tree();
tree.add(1);
tree.add(7);
tree.add(20);
tree.add(3);
tree.add(5);
tree.add(10);
tree.add(25);
tree.add(4);
tree.add(5);
tree.add(6);
tree.add(7);
tree.add(12);
tree.add(11);
tree.add(21);




// console.log(JSON.stringify(tree, null, 4));

console.log(checkTreeForMaxBST(tree));

let tree2 = new Tree();
tree2.add(1);
tree2.add(7);
tree2.add(20);
tree2.add(3);
tree2.add(8);
tree2.add(10);
tree2.add(25);
tree2.add(2);
tree2.add(5);
tree2.add(6);
tree2.add(9);
tree2.add(12);
tree2.add(11);
tree2.add(21);




// console.log(JSON.stringify(tree, null, 4));

console.log(checkTreeForMaxBST(tree2));
